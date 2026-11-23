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

export function getInsKey() {
  return ['ins'] as const
}

export function getNtp1Key() {
  return ['ntp1'] as const
}

export function getTestnetKey() {
  return ['testnet'] as const
}

export function getPostMutationKey() {
  return ['', '/', 'POST'] as const
}

export function getPostMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
    TError,
    InferRequestType<typeof client.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.index.$post>) {
      return parseResponse(client.index.$post(args, options))
    },
  })
}

export function createPost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
          TError,
          InferRequestType<typeof client.index.$post>,
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
    const mutationDefaults = getPostMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInsAddrAddressQueryKey(
  args: InferRequestType<(typeof client.ins.addr)[':address']['$get']>,
) {
  return ['ins', '/ins/addr/:address', args] as const
}

export function getInsAddrAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ins.addr)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ins.addr)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ins.addr)[':address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsAddrAddressQueryKey>
  >({
    queryKey: getInsAddrAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ins.addr[':address'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInsAddrAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ins.addr)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ins.addr)[':address']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins.addr)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInsAddrAddressQueryKey>
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
    return { ...getInsAddrAddressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getInsAddrAddressBalanceQueryKey(
  args: InferRequestType<(typeof client.ins.addr)[':address']['balance']['$get']>,
) {
  return ['ins', '/ins/addr/:address/balance', args] as const
}

export function getInsAddrAddressBalanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ins.addr)[':address']['balance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ins.addr)[':address']['balance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ins.addr)[':address']['balance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsAddrAddressBalanceQueryKey>
  >({
    queryKey: getInsAddrAddressBalanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ins.addr[':address'].balance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInsAddrAddressBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ins.addr)[':address']['balance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ins.addr)[':address']['balance']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins.addr)[':address']['balance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInsAddrAddressBalanceQueryKey>
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
      ...getInsAddrAddressBalanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getInsAddrAddressTotalReceivedQueryKey(
  args: InferRequestType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>,
) {
  return ['ins', '/ins/addr/:address/totalReceived', args] as const
}

export function getInsAddrAddressTotalReceivedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsAddrAddressTotalReceivedQueryKey>
  >({
    queryKey: getInsAddrAddressTotalReceivedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ins.addr[':address'].totalReceived.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInsAddrAddressTotalReceived<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInsAddrAddressTotalReceivedQueryKey>
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
      ...getInsAddrAddressTotalReceivedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getInsAddrAddressTotalSentQueryKey(
  args: InferRequestType<(typeof client.ins.addr)[':address']['totalSent']['$get']>,
) {
  return ['ins', '/ins/addr/:address/totalSent', args] as const
}

export function getInsAddrAddressTotalSentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalSent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ins.addr)[':address']['totalSent']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalSent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsAddrAddressTotalSentQueryKey>
  >({
    queryKey: getInsAddrAddressTotalSentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ins.addr[':address'].totalSent.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInsAddrAddressTotalSent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalSent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ins.addr)[':address']['totalSent']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalSent']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInsAddrAddressTotalSentQueryKey>
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
      ...getInsAddrAddressTotalSentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getInsAddrAddressUnconfirmedBalanceQueryKey(
  args: InferRequestType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>,
) {
  return ['ins', '/ins/addr/:address/unconfirmedBalance', args] as const
}

export function getInsAddrAddressUnconfirmedBalanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsAddrAddressUnconfirmedBalanceQueryKey>
  >({
    queryKey: getInsAddrAddressUnconfirmedBalanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ins.addr[':address'].unconfirmedBalance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInsAddrAddressUnconfirmedBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInsAddrAddressUnconfirmedBalanceQueryKey>
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
      ...getInsAddrAddressUnconfirmedBalanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getInsAddrAddressUtxoQueryKey(
  args: InferRequestType<(typeof client.ins.addr)[':address']['utxo']['$get']>,
) {
  return ['ins', '/ins/addr/:address/utxo', args] as const
}

export function getInsAddrAddressUtxoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ins.addr)[':address']['utxo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ins.addr)[':address']['utxo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ins.addr)[':address']['utxo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsAddrAddressUtxoQueryKey>
  >({
    queryKey: getInsAddrAddressUtxoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ins.addr[':address'].utxo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInsAddrAddressUtxo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ins.addr)[':address']['utxo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ins.addr)[':address']['utxo']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins.addr)[':address']['utxo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInsAddrAddressUtxoQueryKey>
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
    return { ...getInsAddrAddressUtxoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getInsBlockIndexBlockindexQueryKey(
  args: InferRequestType<(typeof client.ins)['block-index'][':blockindex']['$get']>,
) {
  return ['ins', '/ins/block-index/:blockindex', args] as const
}

export function getInsBlockIndexBlockindexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ins)['block-index'][':blockindex']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ins)['block-index'][':blockindex']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ins)['block-index'][':blockindex']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsBlockIndexBlockindexQueryKey>
  >({
    queryKey: getInsBlockIndexBlockindexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ins['block-index'][':blockindex'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInsBlockIndexBlockindex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ins)['block-index'][':blockindex']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ins)['block-index'][':blockindex']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins)['block-index'][':blockindex']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInsBlockIndexBlockindexQueryKey>
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
      ...getInsBlockIndexBlockindexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getInsBlockBlockhashQueryKey(
  args: InferRequestType<(typeof client.ins.block)[':blockhash']['$get']>,
) {
  return ['ins', '/ins/block/:blockhash', args] as const
}

export function getInsBlockBlockhashQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ins.block)[':blockhash']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ins.block)[':blockhash']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ins.block)[':blockhash']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsBlockBlockhashQueryKey>
  >({
    queryKey: getInsBlockBlockhashQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ins.block[':blockhash'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInsBlockBlockhash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ins.block)[':blockhash']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ins.block)[':blockhash']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins.block)[':blockhash']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInsBlockBlockhashQueryKey>
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
    return { ...getInsBlockBlockhashQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getInsRawtxTxidQueryKey(
  args: InferRequestType<(typeof client.ins.rawtx)[':txid']['$get']>,
) {
  return ['ins', '/ins/rawtx/:txid', args] as const
}

export function getInsRawtxTxidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ins.rawtx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ins.rawtx)[':txid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ins.rawtx)[':txid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsRawtxTxidQueryKey>
  >({
    queryKey: getInsRawtxTxidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ins.rawtx[':txid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInsRawtxTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ins.rawtx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ins.rawtx)[':txid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ins.rawtx)[':txid']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInsRawtxTxidQueryKey>
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
    return { ...getInsRawtxTxidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getInsStatusQueryKey(args: InferRequestType<typeof client.ins.status.$get>) {
  return ['ins', '/ins/status', args] as const
}

export function getInsStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.status.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ins.status.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInsStatusQueryKey>
  >({
    queryKey: getInsStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ins.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInsStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ins.status.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.status.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getInsStatusQueryKey>
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
    return { ...getInsStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getInsSyncQueryKey() {
  return ['ins', '/ins/sync'] as const
}

export function getInsSyncQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.sync.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.sync.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInsSyncQueryKey>
  >({
    queryKey: getInsSyncQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ins.sync.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInsSync<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.sync.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.sync.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getInsSyncQueryKey>
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
    return { ...getInsSyncQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostInsTxSendMutationKey() {
  return ['ins', '/ins/tx/send', 'POST'] as const
}

export function getPostInsTxSendMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.tx.send.$post>>>>>,
    TError,
    InferRequestType<typeof client.ins.tx.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInsTxSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ins.tx.send.$post>) {
      return parseResponse(client.ins.tx.send.$post(args, options))
    },
  })
}

export function createPostInsTxSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.tx.send.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ins.tx.send.$post>,
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
    const mutationDefaults = getPostInsTxSendMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInsTxTxidQueryKey(
  args: InferRequestType<(typeof client.ins.tx)[':txid']['$get']>,
) {
  return ['ins', '/ins/tx/:txid', args] as const
}

export function getInsTxTxidQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ins.tx)[':txid']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.ins.tx)[':txid']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ins.tx)[':txid']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInsTxTxidQueryKey>
  >({
    queryKey: getInsTxTxidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ins.tx[':txid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInsTxTxid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ins.tx)[':txid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ins.tx)[':txid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ins.tx)[':txid']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInsTxTxidQueryKey>
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
    return { ...getInsTxTxidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getInsTxsQueryKey(args: InferRequestType<typeof client.ins.txs.$get>) {
  return ['ins', '/ins/txs', args] as const
}

export function getInsTxsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.txs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ins.txs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.txs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInsTxsQueryKey>
  >({
    queryKey: getInsTxsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ins.txs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInsTxs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.txs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ins.txs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.txs.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getInsTxsQueryKey>
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
    return { ...getInsTxsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNtp1AddressinfoAddressQueryKey(
  args: InferRequestType<(typeof client.ntp1.addressinfo)[':address']['$get']>,
) {
  return ['ntp1', '/ntp1/addressinfo/:address', args] as const
}

export function getNtp1AddressinfoAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ntp1.addressinfo)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ntp1.addressinfo)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ntp1.addressinfo)[':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNtp1AddressinfoAddressQueryKey>
  >({
    queryKey: getNtp1AddressinfoAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ntp1.addressinfo[':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNtp1AddressinfoAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ntp1.addressinfo)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ntp1.addressinfo)[':address']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ntp1.addressinfo)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNtp1AddressinfoAddressQueryKey>
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
      ...getNtp1AddressinfoAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostNtp1BroadcastMutationKey() {
  return ['ntp1', '/ntp1/broadcast', 'POST'] as const
}

export function getPostNtp1BroadcastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ntp1.broadcast.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ntp1.broadcast.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNtp1BroadcastMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ntp1.broadcast.$post>) {
      return parseResponse(client.ntp1.broadcast.$post(args, options))
    },
  })
}

export function createPostNtp1Broadcast<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ntp1.broadcast.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ntp1.broadcast.$post>,
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
    const mutationDefaults = getPostNtp1BroadcastMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostNtp1BurntokenMutationKey() {
  return ['ntp1', '/ntp1/burntoken', 'POST'] as const
}

export function getPostNtp1BurntokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ntp1.burntoken.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ntp1.burntoken.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNtp1BurntokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ntp1.burntoken.$post>) {
      return parseResponse(client.ntp1.burntoken.$post(args, options))
    },
  })
}

export function createPostNtp1Burntoken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ntp1.burntoken.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ntp1.burntoken.$post>,
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
    const mutationDefaults = getPostNtp1BurntokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostNtp1IssueMutationKey() {
  return ['ntp1', '/ntp1/issue', 'POST'] as const
}

export function getPostNtp1IssueMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ntp1.issue.$post>>>>>,
    TError,
    InferRequestType<typeof client.ntp1.issue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNtp1IssueMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ntp1.issue.$post>) {
      return parseResponse(client.ntp1.issue.$post(args, options))
    },
  })
}

export function createPostNtp1Issue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ntp1.issue.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ntp1.issue.$post>,
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
    const mutationDefaults = getPostNtp1IssueMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostNtp1SendtokenMutationKey() {
  return ['ntp1', '/ntp1/sendtoken', 'POST'] as const
}

export function getPostNtp1SendtokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ntp1.sendtoken.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ntp1.sendtoken.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNtp1SendtokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ntp1.sendtoken.$post>) {
      return parseResponse(client.ntp1.sendtoken.$post(args, options))
    },
  })
}

export function createPostNtp1Sendtoken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ntp1.sendtoken.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ntp1.sendtoken.$post>,
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
    const mutationDefaults = getPostNtp1SendtokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNtp1StakeholdersTokenidQueryKey(
  args: InferRequestType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>,
) {
  return ['ntp1', '/ntp1/stakeholders/:tokenid', args] as const
}

export function getNtp1StakeholdersTokenidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNtp1StakeholdersTokenidQueryKey>
  >({
    queryKey: getNtp1StakeholdersTokenidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ntp1.stakeholders[':tokenid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNtp1StakeholdersTokenid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNtp1StakeholdersTokenidQueryKey>
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
      ...getNtp1StakeholdersTokenidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNtp1TokenidTokensymbolQueryKey(
  args: InferRequestType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>,
) {
  return ['ntp1', '/ntp1/tokenid/:tokensymbol', args] as const
}

export function getNtp1TokenidTokensymbolQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNtp1TokenidTokensymbolQueryKey>
  >({
    queryKey: getNtp1TokenidTokensymbolQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ntp1.tokenid[':tokensymbol'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNtp1TokenidTokensymbol<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNtp1TokenidTokensymbolQueryKey>
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
      ...getNtp1TokenidTokensymbolQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNtp1TokenmetadataTokenidQueryKey(
  args: InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>,
) {
  return ['ntp1', '/ntp1/tokenmetadata/:tokenid', args] as const
}

export function getNtp1TokenmetadataTokenidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNtp1TokenmetadataTokenidQueryKey>
  >({
    queryKey: getNtp1TokenmetadataTokenidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ntp1.tokenmetadata[':tokenid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNtp1TokenmetadataTokenid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNtp1TokenmetadataTokenidQueryKey>
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
      ...getNtp1TokenmetadataTokenidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNtp1TokenmetadataTokenidUtxoQueryKey(
  args: InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>,
) {
  return ['ntp1', '/ntp1/tokenmetadata/:tokenid/:utxo', args] as const
}

export function getNtp1TokenmetadataTokenidUtxoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNtp1TokenmetadataTokenidUtxoQueryKey>
  >({
    queryKey: getNtp1TokenmetadataTokenidUtxoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ntp1.tokenmetadata[':tokenid'][':utxo'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNtp1TokenmetadataTokenidUtxo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNtp1TokenmetadataTokenidUtxoQueryKey>
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
      ...getNtp1TokenmetadataTokenidUtxoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNtp1TransactioninfoTxidQueryKey(
  args: InferRequestType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>,
) {
  return ['ntp1', '/ntp1/transactioninfo/:txid', args] as const
}

export function getNtp1TransactioninfoTxidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNtp1TransactioninfoTxidQueryKey>
  >({
    queryKey: getNtp1TransactioninfoTxidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ntp1.transactioninfo[':txid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNtp1TransactioninfoTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNtp1TransactioninfoTxidQueryKey>
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
      ...getNtp1TransactioninfoTxidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTestnetFaucetQueryKey(
  args: InferRequestType<typeof client.testnet.faucet.$get>,
) {
  return ['testnet', '/testnet/faucet', args] as const
}

export function getTestnetFaucetQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.faucet.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.testnet.faucet.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.faucet.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetFaucetQueryKey>
  >({
    queryKey: getTestnetFaucetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.testnet.faucet.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTestnetFaucet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.faucet.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.testnet.faucet.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.faucet.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getTestnetFaucetQueryKey>
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
    return { ...getTestnetFaucetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTestnetInsAddrAddressQueryKey(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['$get']>,
) {
  return ['testnet', '/testnet/ins/addr/:address', args] as const
}

export function getTestnetInsAddrAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsAddrAddressQueryKey>
  >({
    queryKey: getTestnetInsAddrAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.testnet.ins.addr[':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTestnetInsAddrAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.testnet.ins.addr)[':address']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTestnetInsAddrAddressQueryKey>
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
      ...getTestnetInsAddrAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTestnetInsAddrAddressBalanceQueryKey(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>,
) {
  return ['testnet', '/testnet/ins/addr/:address/balance', args] as const
}

export function getTestnetInsAddrAddressBalanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsAddrAddressBalanceQueryKey>
  >({
    queryKey: getTestnetInsAddrAddressBalanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.testnet.ins.addr[':address'].balance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTestnetInsAddrAddressBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTestnetInsAddrAddressBalanceQueryKey>
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
      ...getTestnetInsAddrAddressBalanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTestnetInsAddrAddressTotalReceivedQueryKey(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>,
) {
  return ['testnet', '/testnet/ins/addr/:address/totalReceived', args] as const
}

export function getTestnetInsAddrAddressTotalReceivedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsAddrAddressTotalReceivedQueryKey>
  >({
    queryKey: getTestnetInsAddrAddressTotalReceivedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.testnet.ins.addr[':address'].totalReceived.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTestnetInsAddrAddressTotalReceived<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTestnetInsAddrAddressTotalReceivedQueryKey>
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
      ...getTestnetInsAddrAddressTotalReceivedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTestnetInsAddrAddressTotalSentQueryKey(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>,
) {
  return ['testnet', '/testnet/ins/addr/:address/totalSent', args] as const
}

export function getTestnetInsAddrAddressTotalSentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsAddrAddressTotalSentQueryKey>
  >({
    queryKey: getTestnetInsAddrAddressTotalSentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.testnet.ins.addr[':address'].totalSent.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTestnetInsAddrAddressTotalSent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTestnetInsAddrAddressTotalSentQueryKey>
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
      ...getTestnetInsAddrAddressTotalSentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTestnetInsAddrAddressUnconfirmedBalanceQueryKey(
  args: InferRequestType<
    (typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']
  >,
) {
  return ['testnet', '/testnet/ins/addr/:address/unconfirmedBalance', args] as const
}

export function getTestnetInsAddrAddressUnconfirmedBalanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsAddrAddressUnconfirmedBalanceQueryKey>
  >({
    queryKey: getTestnetInsAddrAddressUnconfirmedBalanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.testnet.ins.addr[':address'].unconfirmedBalance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTestnetInsAddrAddressUnconfirmedBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']
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
                    (typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTestnetInsAddrAddressUnconfirmedBalanceQueryKey>
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
      ...getTestnetInsAddrAddressUnconfirmedBalanceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getTestnetInsAddrAddressUtxoQueryKey(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>,
) {
  return ['testnet', '/testnet/ins/addr/:address/utxo', args] as const
}

export function getTestnetInsAddrAddressUtxoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsAddrAddressUtxoQueryKey>
  >({
    queryKey: getTestnetInsAddrAddressUtxoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.testnet.ins.addr[':address'].utxo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTestnetInsAddrAddressUtxo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTestnetInsAddrAddressUtxoQueryKey>
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
      ...getTestnetInsAddrAddressUtxoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTestnetInsBlockIndexBlockindexQueryKey(
  args: InferRequestType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>,
) {
  return ['testnet', '/testnet/ins/block-index/:blockindex', args] as const
}

export function getTestnetInsBlockIndexBlockindexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsBlockIndexBlockindexQueryKey>
  >({
    queryKey: getTestnetInsBlockIndexBlockindexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.testnet.ins['block-index'][':blockindex'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTestnetInsBlockIndexBlockindex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTestnetInsBlockIndexBlockindexQueryKey>
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
      ...getTestnetInsBlockIndexBlockindexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTestnetInsBlockBlockhashQueryKey(
  args: InferRequestType<(typeof client.testnet.ins.block)[':blockhash']['$get']>,
) {
  return ['testnet', '/testnet/ins/block/:blockhash', args] as const
}

export function getTestnetInsBlockBlockhashQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins.block)[':blockhash']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.testnet.ins.block)[':blockhash']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.testnet.ins.block)[':blockhash']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsBlockBlockhashQueryKey>
  >({
    queryKey: getTestnetInsBlockBlockhashQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.testnet.ins.block[':blockhash'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTestnetInsBlockBlockhash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins.block)[':blockhash']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.testnet.ins.block)[':blockhash']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ins.block)[':blockhash']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTestnetInsBlockBlockhashQueryKey>
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
      ...getTestnetInsBlockBlockhashQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTestnetInsRawtxTxidQueryKey(
  args: InferRequestType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>,
) {
  return ['testnet', '/testnet/ins/rawtx/:txid', args] as const
}

export function getTestnetInsRawtxTxidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsRawtxTxidQueryKey>
  >({
    queryKey: getTestnetInsRawtxTxidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.testnet.ins.rawtx[':txid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTestnetInsRawtxTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTestnetInsRawtxTxidQueryKey>
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
    return { ...getTestnetInsRawtxTxidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTestnetInsStatusQueryKey(
  args: InferRequestType<typeof client.testnet.ins.status.$get>,
) {
  return ['testnet', '/testnet/ins/status', args] as const
}

export function getTestnetInsStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.status.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.testnet.ins.status.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsStatusQueryKey>
  >({
    queryKey: getTestnetInsStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.testnet.ins.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTestnetInsStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.testnet.ins.status.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.status.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTestnetInsStatusQueryKey>
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
    return { ...getTestnetInsStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTestnetInsSyncQueryKey() {
  return ['testnet', '/testnet/ins/sync'] as const
}

export function getTestnetInsSyncQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.sync.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.sync.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsSyncQueryKey>
  >({
    queryKey: getTestnetInsSyncQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.testnet.ins.sync.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTestnetInsSync<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.sync.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.sync.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTestnetInsSyncQueryKey>
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
    return { ...getTestnetInsSyncQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostTestnetInsTxSendMutationKey() {
  return ['testnet', '/testnet/ins/tx/send', 'POST'] as const
}

export function getPostTestnetInsTxSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.tx.send.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.testnet.ins.tx.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTestnetInsTxSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.testnet.ins.tx.send.$post>) {
      return parseResponse(client.testnet.ins.tx.send.$post(args, options))
    },
  })
}

export function createPostTestnetInsTxSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.tx.send.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.testnet.ins.tx.send.$post>,
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
    const mutationDefaults = getPostTestnetInsTxSendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTestnetInsTxTxidQueryKey(
  args: InferRequestType<(typeof client.testnet.ins.tx)[':txid']['$get']>,
) {
  return ['testnet', '/testnet/ins/tx/:txid', args] as const
}

export function getTestnetInsTxTxidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.testnet.ins.tx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.testnet.ins.tx)[':txid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.testnet.ins.tx)[':txid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsTxTxidQueryKey>
  >({
    queryKey: getTestnetInsTxTxidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.testnet.ins.tx[':txid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTestnetInsTxTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.testnet.ins.tx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.testnet.ins.tx)[':txid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ins.tx)[':txid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTestnetInsTxTxidQueryKey>
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
    return { ...getTestnetInsTxTxidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTestnetInsTxsQueryKey(
  args: InferRequestType<typeof client.testnet.ins.txs.$get>,
) {
  return ['testnet', '/testnet/ins/txs', args] as const
}

export function getTestnetInsTxsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.txs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.testnet.ins.txs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.txs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsTxsQueryKey>
  >({
    queryKey: getTestnetInsTxsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.testnet.ins.txs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTestnetInsTxs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.txs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.testnet.ins.txs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.txs.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTestnetInsTxsQueryKey>
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
    return { ...getTestnetInsTxsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTestnetNtp1AddressinfoAddressQueryKey(
  args: InferRequestType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>,
) {
  return ['testnet', '/testnet/ntp1/addressinfo/:address', args] as const
}

export function getTestnetNtp1AddressinfoAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetNtp1AddressinfoAddressQueryKey>
  >({
    queryKey: getTestnetNtp1AddressinfoAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.testnet.ntp1.addressinfo[':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTestnetNtp1AddressinfoAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTestnetNtp1AddressinfoAddressQueryKey>
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
      ...getTestnetNtp1AddressinfoAddressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostTestnetNtp1BroadcastMutationKey() {
  return ['testnet', '/testnet/ntp1/broadcast', 'POST'] as const
}

export function getPostTestnetNtp1BroadcastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ntp1.broadcast.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.testnet.ntp1.broadcast.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTestnetNtp1BroadcastMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.testnet.ntp1.broadcast.$post>) {
      return parseResponse(client.testnet.ntp1.broadcast.$post(args, options))
    },
  })
}

export function createPostTestnetNtp1Broadcast<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ntp1.broadcast.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.testnet.ntp1.broadcast.$post>,
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
    const mutationDefaults = getPostTestnetNtp1BroadcastMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTestnetNtp1BurntokenMutationKey() {
  return ['testnet', '/testnet/ntp1/burntoken', 'POST'] as const
}

export function getPostTestnetNtp1BurntokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ntp1.burntoken.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.testnet.ntp1.burntoken.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTestnetNtp1BurntokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.testnet.ntp1.burntoken.$post>) {
      return parseResponse(client.testnet.ntp1.burntoken.$post(args, options))
    },
  })
}

export function createPostTestnetNtp1Burntoken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ntp1.burntoken.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.testnet.ntp1.burntoken.$post>,
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
    const mutationDefaults = getPostTestnetNtp1BurntokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTestnetNtp1IssueMutationKey() {
  return ['testnet', '/testnet/ntp1/issue', 'POST'] as const
}

export function getPostTestnetNtp1IssueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ntp1.issue.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.testnet.ntp1.issue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTestnetNtp1IssueMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.testnet.ntp1.issue.$post>) {
      return parseResponse(client.testnet.ntp1.issue.$post(args, options))
    },
  })
}

export function createPostTestnetNtp1Issue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ntp1.issue.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.testnet.ntp1.issue.$post>,
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
    const mutationDefaults = getPostTestnetNtp1IssueMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTestnetNtp1SendtokenMutationKey() {
  return ['testnet', '/testnet/ntp1/sendtoken', 'POST'] as const
}

export function getPostTestnetNtp1SendtokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ntp1.sendtoken.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.testnet.ntp1.sendtoken.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTestnetNtp1SendtokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.testnet.ntp1.sendtoken.$post>) {
      return parseResponse(client.testnet.ntp1.sendtoken.$post(args, options))
    },
  })
}

export function createPostTestnetNtp1Sendtoken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ntp1.sendtoken.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.testnet.ntp1.sendtoken.$post>,
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
    const mutationDefaults = getPostTestnetNtp1SendtokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTestnetNtp1StakeholdersTokenidQueryKey(
  args: InferRequestType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>,
) {
  return ['testnet', '/testnet/ntp1/stakeholders/:tokenid', args] as const
}

export function getTestnetNtp1StakeholdersTokenidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetNtp1StakeholdersTokenidQueryKey>
  >({
    queryKey: getTestnetNtp1StakeholdersTokenidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.testnet.ntp1.stakeholders[':tokenid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTestnetNtp1StakeholdersTokenid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTestnetNtp1StakeholdersTokenidQueryKey>
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
      ...getTestnetNtp1StakeholdersTokenidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTestnetNtp1TokenidTokensymbolQueryKey(
  args: InferRequestType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>,
) {
  return ['testnet', '/testnet/ntp1/tokenid/:tokensymbol', args] as const
}

export function getTestnetNtp1TokenidTokensymbolQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetNtp1TokenidTokensymbolQueryKey>
  >({
    queryKey: getTestnetNtp1TokenidTokensymbolQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.testnet.ntp1.tokenid[':tokensymbol'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTestnetNtp1TokenidTokensymbol<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTestnetNtp1TokenidTokensymbolQueryKey>
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
      ...getTestnetNtp1TokenidTokensymbolQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTestnetNtp1TokenmetadataTokenidQueryKey(
  args: InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>,
) {
  return ['testnet', '/testnet/ntp1/tokenmetadata/:tokenid', args] as const
}

export function getTestnetNtp1TokenmetadataTokenidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetNtp1TokenmetadataTokenidQueryKey>
  >({
    queryKey: getTestnetNtp1TokenmetadataTokenidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.testnet.ntp1.tokenmetadata[':tokenid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTestnetNtp1TokenmetadataTokenid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTestnetNtp1TokenmetadataTokenidQueryKey>
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
      ...getTestnetNtp1TokenmetadataTokenidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTestnetNtp1TokenmetadataTokenidUtxoQueryKey(
  args: InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>,
) {
  return ['testnet', '/testnet/ntp1/tokenmetadata/:tokenid/:utxo', args] as const
}

export function getTestnetNtp1TokenmetadataTokenidUtxoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetNtp1TokenmetadataTokenidUtxoQueryKey>
  >({
    queryKey: getTestnetNtp1TokenmetadataTokenidUtxoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.testnet.ntp1.tokenmetadata[':tokenid'][':utxo'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTestnetNtp1TokenmetadataTokenidUtxo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']
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
                    (typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTestnetNtp1TokenmetadataTokenidUtxoQueryKey>
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
      ...getTestnetNtp1TokenmetadataTokenidUtxoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTestnetNtp1TransactioninfoTxidQueryKey(
  args: InferRequestType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>,
) {
  return ['testnet', '/testnet/ntp1/transactioninfo/:txid', args] as const
}

export function getTestnetNtp1TransactioninfoTxidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetNtp1TransactioninfoTxidQueryKey>
  >({
    queryKey: getTestnetNtp1TransactioninfoTxidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.testnet.ntp1.transactioninfo[':txid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTestnetNtp1TransactioninfoTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTestnetNtp1TransactioninfoTxidQueryKey>
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
      ...getTestnetNtp1TransactioninfoTxidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
