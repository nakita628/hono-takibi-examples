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

export function usePost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
          TError,
          InferRequestType<typeof client.index.$post>,
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
  const mutationDefaults = getPostMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInsAddrAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ins.addr)[':address']['$get']>>,
) {
  return ['ins', '/ins/addr/:address', toValue(args)] as const
}

export function getInsAddrAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ins.addr)[':address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsAddrAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ins.addr[':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInsAddrAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ins.addr)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ins.addr)[':address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins.addr)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins.addr)[':address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInsAddrAddressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ins.addr)[':address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsAddrAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsAddrAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ins.addr[':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsAddrAddressBalanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ins.addr)[':address']['balance']['$get']>>,
) {
  return ['ins', '/ins/addr/:address/balance', toValue(args)] as const
}

export function getInsAddrAddressBalanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ins.addr)[':address']['balance']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsAddrAddressBalanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ins.addr[':address'].balance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInsAddrAddressBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ins.addr)[':address']['balance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ins.addr)[':address']['balance']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins.addr)[':address']['balance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins.addr)[':address']['balance']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInsAddrAddressBalanceQueryKey>
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
          Awaited<ReturnType<(typeof client.ins.addr)[':address']['balance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsAddrAddressBalanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsAddrAddressBalanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ins.addr[':address'].balance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsAddrAddressTotalReceivedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>
  >,
) {
  return ['ins', '/ins/addr/:address/totalReceived', toValue(args)] as const
}

export function getInsAddrAddressTotalReceivedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsAddrAddressTotalReceivedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ins.addr[':address'].totalReceived.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInsAddrAddressTotalReceived<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInsAddrAddressTotalReceivedQueryKey>
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
          Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsAddrAddressTotalReceivedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsAddrAddressTotalReceivedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ins.addr[':address'].totalReceived.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsAddrAddressTotalSentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ins.addr)[':address']['totalSent']['$get']>
  >,
) {
  return ['ins', '/ins/addr/:address/totalSent', toValue(args)] as const
}

export function getInsAddrAddressTotalSentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ins.addr)[':address']['totalSent']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsAddrAddressTotalSentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ins.addr[':address'].totalSent.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInsAddrAddressTotalSent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalSent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ins.addr)[':address']['totalSent']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalSent']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalSent']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInsAddrAddressTotalSentQueryKey>
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
          Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalSent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsAddrAddressTotalSentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsAddrAddressTotalSentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ins.addr[':address'].totalSent.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsAddrAddressUnconfirmedBalanceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>
  >,
) {
  return ['ins', '/ins/addr/:address/unconfirmedBalance', toValue(args)] as const
}

export function getInsAddrAddressUnconfirmedBalanceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsAddrAddressUnconfirmedBalanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ins.addr[':address'].unconfirmedBalance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInsAddrAddressUnconfirmedBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getInsAddrAddressUnconfirmedBalanceQueryKey>
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
          Awaited<ReturnType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsAddrAddressUnconfirmedBalanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsAddrAddressUnconfirmedBalanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ins.addr[':address'].unconfirmedBalance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsAddrAddressUtxoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ins.addr)[':address']['utxo']['$get']>>,
) {
  return ['ins', '/ins/addr/:address/utxo', toValue(args)] as const
}

export function getInsAddrAddressUtxoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ins.addr)[':address']['utxo']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsAddrAddressUtxoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ins.addr[':address'].utxo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInsAddrAddressUtxo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ins.addr)[':address']['utxo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ins.addr)[':address']['utxo']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins.addr)[':address']['utxo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins.addr)[':address']['utxo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInsAddrAddressUtxoQueryKey>
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
          Awaited<ReturnType<(typeof client.ins.addr)[':address']['utxo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsAddrAddressUtxoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsAddrAddressUtxoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ins.addr[':address'].utxo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsBlockIndexBlockindexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ins)['block-index'][':blockindex']['$get']>
  >,
) {
  return ['ins', '/ins/block-index/:blockindex', toValue(args)] as const
}

export function getInsBlockIndexBlockindexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ins)['block-index'][':blockindex']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsBlockIndexBlockindexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ins['block-index'][':blockindex'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInsBlockIndexBlockindex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ins)['block-index'][':blockindex']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ins)['block-index'][':blockindex']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins)['block-index'][':blockindex']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins)['block-index'][':blockindex']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInsBlockIndexBlockindexQueryKey>
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
          Awaited<ReturnType<(typeof client.ins)['block-index'][':blockindex']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsBlockIndexBlockindexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsBlockIndexBlockindexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ins['block-index'][':blockindex'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsBlockBlockhashQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ins.block)[':blockhash']['$get']>>,
) {
  return ['ins', '/ins/block/:blockhash', toValue(args)] as const
}

export function getInsBlockBlockhashQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ins.block)[':blockhash']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsBlockBlockhashQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ins.block[':blockhash'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInsBlockBlockhash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ins.block)[':blockhash']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ins.block)[':blockhash']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins.block)[':blockhash']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ins.block)[':blockhash']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInsBlockBlockhashQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ins.block)[':blockhash']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsBlockBlockhashQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsBlockBlockhashQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ins.block[':blockhash'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsRawtxTxidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ins.rawtx)[':txid']['$get']>>,
) {
  return ['ins', '/ins/rawtx/:txid', toValue(args)] as const
}

export function getInsRawtxTxidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ins.rawtx)[':txid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsRawtxTxidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ins.rawtx[':txid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInsRawtxTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ins.rawtx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ins.rawtx)[':txid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ins.rawtx)[':txid']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ins.rawtx)[':txid']['$get']>>>
            >
          >,
          ReturnType<typeof getInsRawtxTxidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ins.rawtx)[':txid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsRawtxTxidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsRawtxTxidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ins.rawtx[':txid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ins.status.$get>>,
) {
  return ['ins', '/ins/status', toValue(args)] as const
}

export function getInsStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ins.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ins.status.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInsStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ins.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.status.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.status.$get>>>>
          >,
          ReturnType<typeof getInsStatusQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInsStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ins.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsSyncQueryKey() {
  return ['ins', '/ins/sync'] as const
}

export function getInsSyncQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInsSyncQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ins.sync.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInsSync<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.sync.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.sync.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.sync.$get>>>>
          >,
          ReturnType<typeof getInsSyncQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.sync.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInsSyncQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInsSyncQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ins.sync.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostInsTxSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.tx.send.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ins.tx.send.$post>,
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
  const mutationDefaults = getPostInsTxSendMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInsTxTxidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ins.tx)[':txid']['$get']>>,
) {
  return ['ins', '/ins/tx/:txid', toValue(args)] as const
}

export function getInsTxTxidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ins.tx)[':txid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsTxTxidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ins.tx[':txid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInsTxTxid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ins.tx)[':txid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ins.tx)[':txid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ins.tx)[':txid']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ins.tx)[':txid']['$get']>>>
            >
          >,
          ReturnType<typeof getInsTxTxidQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ins.tx)[':txid']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInsTxTxidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsTxTxidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ins.tx[':txid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsTxsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ins.txs.$get>>,
) {
  return ['ins', '/ins/txs', toValue(args)] as const
}

export function getInsTxsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ins.txs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsTxsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ins.txs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInsTxs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.txs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ins.txs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.txs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.txs.$get>>>>
          >,
          ReturnType<typeof getInsTxsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.txs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInsTxsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsTxsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ins.txs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNtp1AddressinfoAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ntp1.addressinfo)[':address']['$get']>>,
) {
  return ['ntp1', '/ntp1/addressinfo/:address', toValue(args)] as const
}

export function getNtp1AddressinfoAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ntp1.addressinfo)[':address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNtp1AddressinfoAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ntp1.addressinfo[':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNtp1AddressinfoAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ntp1.addressinfo)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ntp1.addressinfo)[':address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ntp1.addressinfo)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ntp1.addressinfo)[':address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNtp1AddressinfoAddressQueryKey>
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
          Awaited<ReturnType<(typeof client.ntp1.addressinfo)[':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNtp1AddressinfoAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNtp1AddressinfoAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ntp1.addressinfo[':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostNtp1Broadcast<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ntp1.broadcast.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ntp1.broadcast.$post>,
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
  const mutationDefaults = getPostNtp1BroadcastMutationOptions<TError, TOnMutateResult>(
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

export function usePostNtp1Burntoken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ntp1.burntoken.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ntp1.burntoken.$post>,
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
  const mutationDefaults = getPostNtp1BurntokenMutationOptions<TError, TOnMutateResult>(
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

export function usePostNtp1Issue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ntp1.issue.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ntp1.issue.$post>,
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
  const mutationDefaults = getPostNtp1IssueMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostNtp1Sendtoken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ntp1.sendtoken.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ntp1.sendtoken.$post>,
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
  const mutationDefaults = getPostNtp1SendtokenMutationOptions<TError, TOnMutateResult>(
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

export function getNtp1StakeholdersTokenidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>>,
) {
  return ['ntp1', '/ntp1/stakeholders/:tokenid', toValue(args)] as const
}

export function getNtp1StakeholdersTokenidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNtp1StakeholdersTokenidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ntp1.stakeholders[':tokenid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNtp1StakeholdersTokenid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNtp1StakeholdersTokenidQueryKey>
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
          Awaited<ReturnType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNtp1StakeholdersTokenidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNtp1StakeholdersTokenidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ntp1.stakeholders[':tokenid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNtp1TokenidTokensymbolQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>>,
) {
  return ['ntp1', '/ntp1/tokenid/:tokensymbol', toValue(args)] as const
}

export function getNtp1TokenidTokensymbolQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNtp1TokenidTokensymbolQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ntp1.tokenid[':tokensymbol'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNtp1TokenidTokensymbol<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNtp1TokenidTokensymbolQueryKey>
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
          Awaited<ReturnType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNtp1TokenidTokensymbolQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNtp1TokenidTokensymbolQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ntp1.tokenid[':tokensymbol'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNtp1TokenmetadataTokenidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>>,
) {
  return ['ntp1', '/ntp1/tokenmetadata/:tokenid', toValue(args)] as const
}

export function getNtp1TokenmetadataTokenidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNtp1TokenmetadataTokenidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ntp1.tokenmetadata[':tokenid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNtp1TokenmetadataTokenid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNtp1TokenmetadataTokenidQueryKey>
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
          Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNtp1TokenmetadataTokenidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNtp1TokenmetadataTokenidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ntp1.tokenmetadata[':tokenid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNtp1TokenmetadataTokenidUtxoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>
  >,
) {
  return ['ntp1', '/ntp1/tokenmetadata/:tokenid/:utxo', toValue(args)] as const
}

export function getNtp1TokenmetadataTokenidUtxoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNtp1TokenmetadataTokenidUtxoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ntp1.tokenmetadata[':tokenid'][':utxo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNtp1TokenmetadataTokenidUtxo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNtp1TokenmetadataTokenidUtxoQueryKey>
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
          Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNtp1TokenmetadataTokenidUtxoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNtp1TokenmetadataTokenidUtxoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ntp1.tokenmetadata[':tokenid'][':utxo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNtp1TransactioninfoTxidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>>,
) {
  return ['ntp1', '/ntp1/transactioninfo/:txid', toValue(args)] as const
}

export function getNtp1TransactioninfoTxidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNtp1TransactioninfoTxidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ntp1.transactioninfo[':txid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNtp1TransactioninfoTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNtp1TransactioninfoTxidQueryKey>
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
          Awaited<ReturnType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNtp1TransactioninfoTxidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNtp1TransactioninfoTxidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ntp1.transactioninfo[':txid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestnetFaucetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.testnet.faucet.$get>>,
) {
  return ['testnet', '/testnet/faucet', toValue(args)] as const
}

export function getTestnetFaucetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.testnet.faucet.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestnetFaucetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.testnet.faucet.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestnetFaucet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.faucet.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.testnet.faucet.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.faucet.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.faucet.$get>>>>
          >,
          ReturnType<typeof getTestnetFaucetQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.faucet.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetFaucetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestnetFaucetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.testnet.faucet.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestnetInsAddrAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.testnet.ins.addr)[':address']['$get']>>,
) {
  return ['testnet', '/testnet/ins/addr/:address', toValue(args)] as const
}

export function getTestnetInsAddrAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.testnet.ins.addr)[':address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestnetInsAddrAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.testnet.ins.addr[':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestnetInsAddrAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.testnet.ins.addr)[':address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTestnetInsAddrAddressQueryKey>
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
          Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsAddrAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestnetInsAddrAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.testnet.ins.addr[':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestnetInsAddrAddressBalanceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>
  >,
) {
  return ['testnet', '/testnet/ins/addr/:address/balance', toValue(args)] as const
}

export function getTestnetInsAddrAddressBalanceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestnetInsAddrAddressBalanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.testnet.ins.addr[':address'].balance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestnetInsAddrAddressBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTestnetInsAddrAddressBalanceQueryKey>
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
          Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsAddrAddressBalanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestnetInsAddrAddressBalanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.testnet.ins.addr[':address'].balance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestnetInsAddrAddressTotalReceivedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>
  >,
) {
  return ['testnet', '/testnet/ins/addr/:address/totalReceived', toValue(args)] as const
}

export function getTestnetInsAddrAddressTotalReceivedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestnetInsAddrAddressTotalReceivedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.testnet.ins.addr[':address'].totalReceived.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestnetInsAddrAddressTotalReceived<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTestnetInsAddrAddressTotalReceivedQueryKey>
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
          Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsAddrAddressTotalReceivedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestnetInsAddrAddressTotalReceivedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.testnet.ins.addr[':address'].totalReceived.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestnetInsAddrAddressTotalSentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>
  >,
) {
  return ['testnet', '/testnet/ins/addr/:address/totalSent', toValue(args)] as const
}

export function getTestnetInsAddrAddressTotalSentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestnetInsAddrAddressTotalSentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.testnet.ins.addr[':address'].totalSent.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestnetInsAddrAddressTotalSent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTestnetInsAddrAddressTotalSentQueryKey>
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
          Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsAddrAddressTotalSentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestnetInsAddrAddressTotalSentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.testnet.ins.addr[':address'].totalSent.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestnetInsAddrAddressUnconfirmedBalanceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']>
  >,
) {
  return ['testnet', '/testnet/ins/addr/:address/unconfirmedBalance', toValue(args)] as const
}

export function getTestnetInsAddrAddressUnconfirmedBalanceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestnetInsAddrAddressUnconfirmedBalanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.testnet.ins.addr[':address'].unconfirmedBalance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestnetInsAddrAddressUnconfirmedBalance<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']>
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
                    (typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']
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
                    (typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTestnetInsAddrAddressUnconfirmedBalanceQueryKey>
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
            ReturnType<(typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsAddrAddressUnconfirmedBalanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestnetInsAddrAddressUnconfirmedBalanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.testnet.ins.addr[':address'].unconfirmedBalance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestnetInsAddrAddressUtxoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>
  >,
) {
  return ['testnet', '/testnet/ins/addr/:address/utxo', toValue(args)] as const
}

export function getTestnetInsAddrAddressUtxoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestnetInsAddrAddressUtxoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.testnet.ins.addr[':address'].utxo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestnetInsAddrAddressUtxo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTestnetInsAddrAddressUtxoQueryKey>
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
          Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsAddrAddressUtxoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestnetInsAddrAddressUtxoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.testnet.ins.addr[':address'].utxo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestnetInsBlockIndexBlockindexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>
  >,
) {
  return ['testnet', '/testnet/ins/block-index/:blockindex', toValue(args)] as const
}

export function getTestnetInsBlockIndexBlockindexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestnetInsBlockIndexBlockindexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.testnet.ins['block-index'][':blockindex'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestnetInsBlockIndexBlockindex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTestnetInsBlockIndexBlockindexQueryKey>
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
          Awaited<ReturnType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsBlockIndexBlockindexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestnetInsBlockIndexBlockindexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.testnet.ins['block-index'][':blockindex'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestnetInsBlockBlockhashQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.testnet.ins.block)[':blockhash']['$get']>>,
) {
  return ['testnet', '/testnet/ins/block/:blockhash', toValue(args)] as const
}

export function getTestnetInsBlockBlockhashQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.testnet.ins.block)[':blockhash']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestnetInsBlockBlockhashQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.testnet.ins.block[':blockhash'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestnetInsBlockBlockhash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ins.block)[':blockhash']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.testnet.ins.block)[':blockhash']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ins.block)[':blockhash']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ins.block)[':blockhash']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTestnetInsBlockBlockhashQueryKey>
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
          Awaited<ReturnType<(typeof client.testnet.ins.block)[':blockhash']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsBlockBlockhashQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestnetInsBlockBlockhashQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.testnet.ins.block[':blockhash'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestnetInsRawtxTxidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>>,
) {
  return ['testnet', '/testnet/ins/rawtx/:txid', toValue(args)] as const
}

export function getTestnetInsRawtxTxidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestnetInsRawtxTxidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.testnet.ins.rawtx[':txid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestnetInsRawtxTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTestnetInsRawtxTxidQueryKey>
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
          Awaited<ReturnType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsRawtxTxidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestnetInsRawtxTxidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.testnet.ins.rawtx[':txid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestnetInsStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.testnet.ins.status.$get>>,
) {
  return ['testnet', '/testnet/ins/status', toValue(args)] as const
}

export function getTestnetInsStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.testnet.ins.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestnetInsStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.testnet.ins.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestnetInsStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.testnet.ins.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.status.$get>>>
            >
          >,
          ReturnType<typeof getTestnetInsStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestnetInsStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.testnet.ins.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestnetInsSyncQueryKey() {
  return ['testnet', '/testnet/ins/sync'] as const
}

export function getTestnetInsSyncQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTestnetInsSyncQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.testnet.ins.sync.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTestnetInsSync<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.sync.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.sync.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.sync.$get>>>
            >
          >,
          ReturnType<typeof getTestnetInsSyncQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.sync.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsSyncQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTestnetInsSyncQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.testnet.ins.sync.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTestnetInsTxSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.tx.send.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.testnet.ins.tx.send.$post>,
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
  const mutationDefaults = getPostTestnetInsTxSendMutationOptions<TError, TOnMutateResult>(
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

export function getTestnetInsTxTxidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.testnet.ins.tx)[':txid']['$get']>>,
) {
  return ['testnet', '/testnet/ins/tx/:txid', toValue(args)] as const
}

export function getTestnetInsTxTxidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.testnet.ins.tx)[':txid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestnetInsTxTxidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.testnet.ins.tx[':txid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestnetInsTxTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.testnet.ins.tx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.testnet.ins.tx)[':txid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ins.tx)[':txid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ins.tx)[':txid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTestnetInsTxTxidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.testnet.ins.tx)[':txid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsTxTxidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestnetInsTxTxidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.testnet.ins.tx[':txid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestnetInsTxsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.testnet.ins.txs.$get>>,
) {
  return ['testnet', '/testnet/ins/txs', toValue(args)] as const
}

export function getTestnetInsTxsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.testnet.ins.txs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestnetInsTxsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.testnet.ins.txs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestnetInsTxs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.txs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.testnet.ins.txs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.txs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.txs.$get>>>
            >
          >,
          ReturnType<typeof getTestnetInsTxsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.txs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetInsTxsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestnetInsTxsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.testnet.ins.txs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestnetNtp1AddressinfoAddressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>
  >,
) {
  return ['testnet', '/testnet/ntp1/addressinfo/:address', toValue(args)] as const
}

export function getTestnetNtp1AddressinfoAddressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestnetNtp1AddressinfoAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.testnet.ntp1.addressinfo[':address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestnetNtp1AddressinfoAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTestnetNtp1AddressinfoAddressQueryKey>
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
          Awaited<ReturnType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetNtp1AddressinfoAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestnetNtp1AddressinfoAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.testnet.ntp1.addressinfo[':address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTestnetNtp1Broadcast<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ntp1.broadcast.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.testnet.ntp1.broadcast.$post>,
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
  const mutationDefaults = getPostTestnetNtp1BroadcastMutationOptions<TError, TOnMutateResult>(
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

export function usePostTestnetNtp1Burntoken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ntp1.burntoken.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.testnet.ntp1.burntoken.$post>,
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
  const mutationDefaults = getPostTestnetNtp1BurntokenMutationOptions<TError, TOnMutateResult>(
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

export function usePostTestnetNtp1Issue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ntp1.issue.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.testnet.ntp1.issue.$post>,
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
  const mutationDefaults = getPostTestnetNtp1IssueMutationOptions<TError, TOnMutateResult>(
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

export function usePostTestnetNtp1Sendtoken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ntp1.sendtoken.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.testnet.ntp1.sendtoken.$post>,
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
  const mutationDefaults = getPostTestnetNtp1SendtokenMutationOptions<TError, TOnMutateResult>(
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

export function getTestnetNtp1StakeholdersTokenidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>
  >,
) {
  return ['testnet', '/testnet/ntp1/stakeholders/:tokenid', toValue(args)] as const
}

export function getTestnetNtp1StakeholdersTokenidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestnetNtp1StakeholdersTokenidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.testnet.ntp1.stakeholders[':tokenid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestnetNtp1StakeholdersTokenid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTestnetNtp1StakeholdersTokenidQueryKey>
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
          Awaited<ReturnType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetNtp1StakeholdersTokenidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestnetNtp1StakeholdersTokenidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.testnet.ntp1.stakeholders[':tokenid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestnetNtp1TokenidTokensymbolQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>
  >,
) {
  return ['testnet', '/testnet/ntp1/tokenid/:tokensymbol', toValue(args)] as const
}

export function getTestnetNtp1TokenidTokensymbolQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestnetNtp1TokenidTokensymbolQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.testnet.ntp1.tokenid[':tokensymbol'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestnetNtp1TokenidTokensymbol<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTestnetNtp1TokenidTokensymbolQueryKey>
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
          Awaited<ReturnType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetNtp1TokenidTokensymbolQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestnetNtp1TokenidTokensymbolQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.testnet.ntp1.tokenid[':tokensymbol'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestnetNtp1TokenmetadataTokenidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>
  >,
) {
  return ['testnet', '/testnet/ntp1/tokenmetadata/:tokenid', toValue(args)] as const
}

export function getTestnetNtp1TokenmetadataTokenidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestnetNtp1TokenmetadataTokenidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.testnet.ntp1.tokenmetadata[':tokenid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestnetNtp1TokenmetadataTokenid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTestnetNtp1TokenmetadataTokenidQueryKey>
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
          Awaited<ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetNtp1TokenmetadataTokenidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestnetNtp1TokenmetadataTokenidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.testnet.ntp1.tokenmetadata[':tokenid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestnetNtp1TokenmetadataTokenidUtxoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>
  >,
) {
  return ['testnet', '/testnet/ntp1/tokenmetadata/:tokenid/:utxo', toValue(args)] as const
}

export function getTestnetNtp1TokenmetadataTokenidUtxoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestnetNtp1TokenmetadataTokenidUtxoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.testnet.ntp1.tokenmetadata[':tokenid'][':utxo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestnetNtp1TokenmetadataTokenidUtxo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>
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
                    (typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']
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
                    (typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTestnetNtp1TokenmetadataTokenidUtxoQueryKey>
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
            ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetNtp1TokenmetadataTokenidUtxoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestnetNtp1TokenmetadataTokenidUtxoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.testnet.ntp1.tokenmetadata[':tokenid'][':utxo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestnetNtp1TransactioninfoTxidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>
  >,
) {
  return ['testnet', '/testnet/ntp1/transactioninfo/:txid', toValue(args)] as const
}

export function getTestnetNtp1TransactioninfoTxidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestnetNtp1TransactioninfoTxidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.testnet.ntp1.transactioninfo[':txid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestnetNtp1TransactioninfoTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTestnetNtp1TransactioninfoTxidQueryKey>
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
          Awaited<ReturnType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestnetNtp1TransactioninfoTxidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestnetNtp1TransactioninfoTxidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.testnet.ntp1.transactioninfo[':txid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
