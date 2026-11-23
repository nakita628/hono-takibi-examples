import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
        TError,
        InferRequestType<typeof client.index.$post>,
        TOnMutateResult
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

export function useInsAddrAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ins.addr)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ins.addr)[':address']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ins.addr)[':address']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsAddrAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInsAddrAddressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInsAddrAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ins.addr)[':address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ins.addr)[':address']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ins.addr)[':address']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsAddrAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInsAddrAddressQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.ins.addr)[':address']['balance']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getInsAddrAddressBalanceQueryKey>
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
      ...getInsAddrAddressBalanceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInsAddrAddressBalance<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getInsAddrAddressBalanceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getInsAddrAddressTotalReceivedQueryKey>
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
      ...getInsAddrAddressTotalReceivedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInsAddrAddressTotalReceived<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getInsAddrAddressTotalReceivedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.ins.addr)[':address']['totalSent']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getInsAddrAddressTotalSentQueryKey>
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
      ...getInsAddrAddressTotalSentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInsAddrAddressTotalSent<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getInsAddrAddressTotalSentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getInsAddrAddressUnconfirmedBalanceQueryKey>
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
      ...getInsAddrAddressUnconfirmedBalanceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInsAddrAddressUnconfirmedBalance<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getInsAddrAddressUnconfirmedBalanceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.ins.addr)[':address']['utxo']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getInsAddrAddressUtxoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInsAddrAddressUtxoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInsAddrAddressUtxo<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInsAddrAddressUtxoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.ins)['block-index'][':blockindex']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getInsBlockIndexBlockindexQueryKey>
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
      ...getInsBlockIndexBlockindexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInsBlockIndexBlockindex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getInsBlockIndexBlockindexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useInsBlockBlockhash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ins.block)[':blockhash']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ins.block)[':blockhash']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getInsBlockBlockhashQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInsBlockBlockhashQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInsBlockBlockhash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ins.block)[':blockhash']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ins.block)[':blockhash']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInsBlockBlockhashQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useInsRawtxTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ins.rawtx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ins.rawtx)[':txid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ins.rawtx)[':txid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsRawtxTxidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInsRawtxTxidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInsRawtxTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ins.rawtx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ins.rawtx)[':txid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ins.rawtx)[':txid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsRawtxTxidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInsRawtxTxidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useInsStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ins.status.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInsStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInsStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInsStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ins.status.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInsStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInsStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useInsSync<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.sync.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.sync.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInsSyncQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInsSyncQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInsSync<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.sync.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.sync.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInsSyncQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInsSyncQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.tx.send.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ins.tx.send.$post>,
        TOnMutateResult
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

export function useInsTxTxid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ins.tx)[':txid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ins.tx)[':txid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ins.tx)[':txid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsTxTxidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInsTxTxidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInsTxTxid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ins.tx)[':txid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ins.tx)[':txid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ins.tx)[':txid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsTxTxidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInsTxTxidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useInsTxs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.txs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ins.txs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.txs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInsTxsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInsTxsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInsTxs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.txs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ins.txs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.txs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInsTxsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInsTxsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.ntp1.addressinfo)[':address']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getNtp1AddressinfoAddressQueryKey>
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
      ...getNtp1AddressinfoAddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNtp1AddressinfoAddress<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNtp1AddressinfoAddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ntp1.broadcast.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ntp1.broadcast.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ntp1.burntoken.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ntp1.burntoken.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ntp1.issue.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ntp1.issue.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ntp1.sendtoken.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ntp1.sendtoken.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getNtp1StakeholdersTokenidQueryKey>
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
      ...getNtp1StakeholdersTokenidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNtp1StakeholdersTokenid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNtp1StakeholdersTokenidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getNtp1TokenidTokensymbolQueryKey>
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
      ...getNtp1TokenidTokensymbolQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNtp1TokenidTokensymbol<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNtp1TokenidTokensymbolQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getNtp1TokenmetadataTokenidQueryKey>
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
      ...getNtp1TokenmetadataTokenidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNtp1TokenmetadataTokenid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNtp1TokenmetadataTokenidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getNtp1TokenmetadataTokenidUtxoQueryKey>
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
      ...getNtp1TokenmetadataTokenidUtxoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNtp1TokenmetadataTokenidUtxo<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNtp1TokenmetadataTokenidUtxoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getNtp1TransactioninfoTxidQueryKey>
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
      ...getNtp1TransactioninfoTxidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNtp1TransactioninfoTxid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getNtp1TransactioninfoTxidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTestnetFaucet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.faucet.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.testnet.faucet.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.faucet.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTestnetFaucetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTestnetFaucetQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTestnetFaucet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.faucet.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.testnet.faucet.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.faucet.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTestnetFaucetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTestnetFaucetQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTestnetInsAddrAddressQueryKey>
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
      ...getTestnetInsAddrAddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTestnetInsAddrAddress<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTestnetInsAddrAddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTestnetInsAddrAddressBalanceQueryKey>
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
      ...getTestnetInsAddrAddressBalanceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTestnetInsAddrAddressBalance<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTestnetInsAddrAddressBalanceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTestnetInsAddrAddressTotalReceivedQueryKey>
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
      ...getTestnetInsAddrAddressTotalReceivedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTestnetInsAddrAddressTotalReceived<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTestnetInsAddrAddressTotalReceivedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getTestnetInsAddrAddressTotalSentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTestnetInsAddrAddressTotalSent<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTestnetInsAddrAddressTotalSentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTestnetInsAddrAddressUnconfirmedBalanceQueryKey>
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
      ...getTestnetInsAddrAddressUnconfirmedBalanceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTestnetInsAddrAddressUnconfirmedBalance<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTestnetInsAddrAddressUnconfirmedBalanceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTestnetInsAddrAddressUtxoQueryKey>
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
      ...getTestnetInsAddrAddressUtxoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTestnetInsAddrAddressUtxo<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTestnetInsAddrAddressUtxoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getTestnetInsBlockIndexBlockindexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTestnetInsBlockIndexBlockindex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTestnetInsBlockIndexBlockindexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.testnet.ins.block)[':blockhash']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTestnetInsBlockBlockhashQueryKey>
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
      ...getTestnetInsBlockBlockhashQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTestnetInsBlockBlockhash<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTestnetInsBlockBlockhashQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTestnetInsRawtxTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTestnetInsRawtxTxidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTestnetInsRawtxTxidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTestnetInsRawtxTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTestnetInsRawtxTxidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTestnetInsStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.testnet.ins.status.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTestnetInsStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTestnetInsStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTestnetInsStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.testnet.ins.status.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTestnetInsStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTestnetInsStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTestnetInsSync<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.sync.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.sync.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTestnetInsSyncQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTestnetInsSyncQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTestnetInsSync<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.sync.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.sync.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTestnetInsSyncQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTestnetInsSyncQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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

export function useTestnetInsTxTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.testnet.ins.tx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.testnet.ins.tx)[':txid']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTestnetInsTxTxidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTestnetInsTxTxidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTestnetInsTxTxid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.testnet.ins.tx)[':txid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.testnet.ins.tx)[':txid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTestnetInsTxTxidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTestnetInsTxs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.txs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.testnet.ins.txs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.txs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTestnetInsTxsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTestnetInsTxsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTestnetInsTxs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.txs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.testnet.ins.txs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.txs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTestnetInsTxsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTestnetInsTxsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTestnetNtp1AddressinfoAddressQueryKey>
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
      ...getTestnetNtp1AddressinfoAddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTestnetNtp1AddressinfoAddress<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTestnetNtp1AddressinfoAddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTestnetNtp1StakeholdersTokenidQueryKey>
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
      ...getTestnetNtp1StakeholdersTokenidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTestnetNtp1StakeholdersTokenid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTestnetNtp1StakeholdersTokenidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTestnetNtp1TokenidTokensymbolQueryKey>
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
      ...getTestnetNtp1TokenidTokensymbolQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTestnetNtp1TokenidTokensymbol<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTestnetNtp1TokenidTokensymbolQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTestnetNtp1TokenmetadataTokenidQueryKey>
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
      ...getTestnetNtp1TokenmetadataTokenidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTestnetNtp1TokenmetadataTokenid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTestnetNtp1TokenmetadataTokenidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getTestnetNtp1TokenmetadataTokenidUtxoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTestnetNtp1TokenmetadataTokenidUtxo<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTestnetNtp1TokenmetadataTokenidUtxoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTestnetNtp1TransactioninfoTxidQueryKey>
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
      ...getTestnetNtp1TransactioninfoTxidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTestnetNtp1TransactioninfoTxid<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getTestnetNtp1TransactioninfoTxidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
