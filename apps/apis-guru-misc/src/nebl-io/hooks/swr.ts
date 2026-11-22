import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostKey() {
  return ['', '/', 'POST'] as const
}

export function usePost<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.index.$post> }) =>
        parseResponse(client.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInsAddrAddressKey(
  args: InferRequestType<(typeof client.ins.addr)[':address']['$get']>,
) {
  return ['ins', '/ins/addr/:address', args] as const
}

export function useGetInsAddrAddress<TError = unknown>(
  args: InferRequestType<(typeof client.ins.addr)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ins.addr)[':address']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInsAddrAddressKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ins.addr)[':address']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ins.addr[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsAddrAddress<TError = unknown>(
  args: InferRequestType<(typeof client.ins.addr)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ins.addr)[':address']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInsAddrAddressKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ins.addr)[':address']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ins.addr[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInsAddrAddressBalanceKey(
  args: InferRequestType<(typeof client.ins.addr)[':address']['balance']['$get']>,
) {
  return ['ins', '/ins/addr/:address/balance', args] as const
}

export function useGetInsAddrAddressBalance<TError = unknown>(
  args: InferRequestType<(typeof client.ins.addr)[':address']['balance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins.addr)[':address']['balance']['$get']>>
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
        ? getGetInsAddrAddressBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins.addr)[':address']['balance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ins.addr[':address'].balance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsAddrAddressBalance<TError = unknown>(
  args: InferRequestType<(typeof client.ins.addr)[':address']['balance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins.addr)[':address']['balance']['$get']>>
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
        ? getGetInsAddrAddressBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins.addr)[':address']['balance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ins.addr[':address'].balance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInsAddrAddressTotalReceivedKey(
  args: InferRequestType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>,
) {
  return ['ins', '/ins/addr/:address/totalReceived', args] as const
}

export function useGetInsAddrAddressTotalReceived<TError = unknown>(
  args: InferRequestType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>>
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
        ? getGetInsAddrAddressTotalReceivedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ins.addr[':address'].totalReceived.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsAddrAddressTotalReceived<TError = unknown>(
  args: InferRequestType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>>
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
        ? getGetInsAddrAddressTotalReceivedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalReceived']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ins.addr[':address'].totalReceived.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInsAddrAddressTotalSentKey(
  args: InferRequestType<(typeof client.ins.addr)[':address']['totalSent']['$get']>,
) {
  return ['ins', '/ins/addr/:address/totalSent', args] as const
}

export function useGetInsAddrAddressTotalSent<TError = unknown>(
  args: InferRequestType<(typeof client.ins.addr)[':address']['totalSent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalSent']['$get']>>
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
        ? getGetInsAddrAddressTotalSentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalSent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ins.addr[':address'].totalSent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsAddrAddressTotalSent<TError = unknown>(
  args: InferRequestType<(typeof client.ins.addr)[':address']['totalSent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalSent']['$get']>>
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
        ? getGetInsAddrAddressTotalSentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins.addr)[':address']['totalSent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ins.addr[':address'].totalSent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInsAddrAddressUnconfirmedBalanceKey(
  args: InferRequestType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>,
) {
  return ['ins', '/ins/addr/:address/unconfirmedBalance', args] as const
}

export function useGetInsAddrAddressUnconfirmedBalance<TError = unknown>(
  args: InferRequestType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>>
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
        ? getGetInsAddrAddressUnconfirmedBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ins.addr[':address'].unconfirmedBalance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsAddrAddressUnconfirmedBalance<TError = unknown>(
  args: InferRequestType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>>
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
        ? getGetInsAddrAddressUnconfirmedBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins.addr)[':address']['unconfirmedBalance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ins.addr[':address'].unconfirmedBalance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInsAddrAddressUtxoKey(
  args: InferRequestType<(typeof client.ins.addr)[':address']['utxo']['$get']>,
) {
  return ['ins', '/ins/addr/:address/utxo', args] as const
}

export function useGetInsAddrAddressUtxo<TError = unknown>(
  args: InferRequestType<(typeof client.ins.addr)[':address']['utxo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins.addr)[':address']['utxo']['$get']>>
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
        ? getGetInsAddrAddressUtxoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins.addr)[':address']['utxo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ins.addr[':address'].utxo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsAddrAddressUtxo<TError = unknown>(
  args: InferRequestType<(typeof client.ins.addr)[':address']['utxo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins.addr)[':address']['utxo']['$get']>>
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
        ? getGetInsAddrAddressUtxoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins.addr)[':address']['utxo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ins.addr[':address'].utxo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInsBlockIndexBlockindexKey(
  args: InferRequestType<(typeof client.ins)['block-index'][':blockindex']['$get']>,
) {
  return ['ins', '/ins/block-index/:blockindex', args] as const
}

export function useGetInsBlockIndexBlockindex<TError = unknown>(
  args: InferRequestType<(typeof client.ins)['block-index'][':blockindex']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins)['block-index'][':blockindex']['$get']>>
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
        ? getGetInsBlockIndexBlockindexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins)['block-index'][':blockindex']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ins['block-index'][':blockindex'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsBlockIndexBlockindex<TError = unknown>(
  args: InferRequestType<(typeof client.ins)['block-index'][':blockindex']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins)['block-index'][':blockindex']['$get']>>
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
        ? getGetInsBlockIndexBlockindexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ins)['block-index'][':blockindex']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ins['block-index'][':blockindex'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInsBlockBlockhashKey(
  args: InferRequestType<(typeof client.ins.block)[':blockhash']['$get']>,
) {
  return ['ins', '/ins/block/:blockhash', args] as const
}

export function useGetInsBlockBlockhash<TError = unknown>(
  args: InferRequestType<(typeof client.ins.block)[':blockhash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ins.block)[':blockhash']['$get']>>>
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
        ? getGetInsBlockBlockhashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ins.block)[':blockhash']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ins.block[':blockhash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsBlockBlockhash<TError = unknown>(
  args: InferRequestType<(typeof client.ins.block)[':blockhash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ins.block)[':blockhash']['$get']>>>
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
        ? getGetInsBlockBlockhashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ins.block)[':blockhash']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ins.block[':blockhash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInsRawtxTxidKey(
  args: InferRequestType<(typeof client.ins.rawtx)[':txid']['$get']>,
) {
  return ['ins', '/ins/rawtx/:txid', args] as const
}

export function useGetInsRawtxTxid<TError = unknown>(
  args: InferRequestType<(typeof client.ins.rawtx)[':txid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ins.rawtx)[':txid']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInsRawtxTxidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ins.rawtx)[':txid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ins.rawtx[':txid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsRawtxTxid<TError = unknown>(
  args: InferRequestType<(typeof client.ins.rawtx)[':txid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ins.rawtx)[':txid']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInsRawtxTxidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ins.rawtx)[':txid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ins.rawtx[':txid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInsStatusKey(args: InferRequestType<typeof client.ins.status.$get>) {
  return ['ins', '/ins/status', args] as const
}

export function useGetInsStatus<TError = unknown>(
  args: InferRequestType<typeof client.ins.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.status.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInsStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ins.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsStatus<TError = unknown>(
  args: InferRequestType<typeof client.ins.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.status.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInsStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ins.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInsSyncKey() {
  return ['ins', '/ins/sync'] as const
}

export function useGetInsSync<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.sync.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInsSyncKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.sync.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ins.sync.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsSync<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.sync.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInsSyncKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.sync.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ins.sync.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInsTxSendKey() {
  return ['ins', '/ins/tx/send', 'POST'] as const
}

export function usePostInsTxSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.tx.send.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ins.tx.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInsTxSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ins.tx.send.$post> }) =>
        parseResponse(client.ins.tx.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInsTxTxidKey(
  args: InferRequestType<(typeof client.ins.tx)[':txid']['$get']>,
) {
  return ['ins', '/ins/tx/:txid', args] as const
}

export function useGetInsTxTxid<TError = unknown>(
  args: InferRequestType<(typeof client.ins.tx)[':txid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ins.tx)[':txid']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInsTxTxidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ins.tx)[':txid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ins.tx[':txid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsTxTxid<TError = unknown>(
  args: InferRequestType<(typeof client.ins.tx)[':txid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ins.tx)[':txid']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInsTxTxidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ins.tx)[':txid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ins.tx[':txid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInsTxsKey(args: InferRequestType<typeof client.ins.txs.$get>) {
  return ['ins', '/ins/txs', args] as const
}

export function useGetInsTxs<TError = unknown>(
  args: InferRequestType<typeof client.ins.txs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.txs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInsTxsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.txs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ins.txs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetInsTxs<TError = unknown>(
  args: InferRequestType<typeof client.ins.txs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.txs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInsTxsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ins.txs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ins.txs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetNtp1AddressinfoAddressKey(
  args: InferRequestType<(typeof client.ntp1.addressinfo)[':address']['$get']>,
) {
  return ['ntp1', '/ntp1/addressinfo/:address', args] as const
}

export function useGetNtp1AddressinfoAddress<TError = unknown>(
  args: InferRequestType<(typeof client.ntp1.addressinfo)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.addressinfo)[':address']['$get']>>
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
        ? getGetNtp1AddressinfoAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.addressinfo)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ntp1.addressinfo[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNtp1AddressinfoAddress<TError = unknown>(
  args: InferRequestType<(typeof client.ntp1.addressinfo)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.addressinfo)[':address']['$get']>>
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
        ? getGetNtp1AddressinfoAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.addressinfo)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ntp1.addressinfo[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNtp1BroadcastKey() {
  return ['ntp1', '/ntp1/broadcast', 'POST'] as const
}

export function usePostNtp1Broadcast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ntp1.broadcast.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ntp1.broadcast.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNtp1BroadcastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ntp1.broadcast.$post> }) =>
        parseResponse(client.ntp1.broadcast.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNtp1BurntokenKey() {
  return ['ntp1', '/ntp1/burntoken', 'POST'] as const
}

export function usePostNtp1Burntoken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ntp1.burntoken.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ntp1.burntoken.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNtp1BurntokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ntp1.burntoken.$post> }) =>
        parseResponse(client.ntp1.burntoken.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNtp1IssueKey() {
  return ['ntp1', '/ntp1/issue', 'POST'] as const
}

export function usePostNtp1Issue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ntp1.issue.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ntp1.issue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNtp1IssueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ntp1.issue.$post> }) =>
        parseResponse(client.ntp1.issue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNtp1SendtokenKey() {
  return ['ntp1', '/ntp1/sendtoken', 'POST'] as const
}

export function usePostNtp1Sendtoken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ntp1.sendtoken.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ntp1.sendtoken.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNtp1SendtokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ntp1.sendtoken.$post> }) =>
        parseResponse(client.ntp1.sendtoken.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNtp1StakeholdersTokenidKey(
  args: InferRequestType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>,
) {
  return ['ntp1', '/ntp1/stakeholders/:tokenid', args] as const
}

export function useGetNtp1StakeholdersTokenid<TError = unknown>(
  args: InferRequestType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>>
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
        ? getGetNtp1StakeholdersTokenidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ntp1.stakeholders[':tokenid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNtp1StakeholdersTokenid<TError = unknown>(
  args: InferRequestType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>>
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
        ? getGetNtp1StakeholdersTokenidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.stakeholders)[':tokenid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ntp1.stakeholders[':tokenid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNtp1TokenidTokensymbolKey(
  args: InferRequestType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>,
) {
  return ['ntp1', '/ntp1/tokenid/:tokensymbol', args] as const
}

export function useGetNtp1TokenidTokensymbol<TError = unknown>(
  args: InferRequestType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>>
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
        ? getGetNtp1TokenidTokensymbolKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ntp1.tokenid[':tokensymbol'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNtp1TokenidTokensymbol<TError = unknown>(
  args: InferRequestType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>>
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
        ? getGetNtp1TokenidTokensymbolKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.tokenid)[':tokensymbol']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ntp1.tokenid[':tokensymbol'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNtp1TokenmetadataTokenidKey(
  args: InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>,
) {
  return ['ntp1', '/ntp1/tokenmetadata/:tokenid', args] as const
}

export function useGetNtp1TokenmetadataTokenid<TError = unknown>(
  args: InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>>
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
        ? getGetNtp1TokenmetadataTokenidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ntp1.tokenmetadata[':tokenid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNtp1TokenmetadataTokenid<TError = unknown>(
  args: InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>>
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
        ? getGetNtp1TokenmetadataTokenidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ntp1.tokenmetadata[':tokenid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNtp1TokenmetadataTokenidUtxoKey(
  args: InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>,
) {
  return ['ntp1', '/ntp1/tokenmetadata/:tokenid/:utxo', args] as const
}

export function useGetNtp1TokenmetadataTokenidUtxo<TError = unknown>(
  args: InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>>
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
        ? getGetNtp1TokenmetadataTokenidUtxoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ntp1.tokenmetadata[':tokenid'][':utxo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNtp1TokenmetadataTokenidUtxo<TError = unknown>(
  args: InferRequestType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>>
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
        ? getGetNtp1TokenmetadataTokenidUtxoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ntp1.tokenmetadata[':tokenid'][':utxo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNtp1TransactioninfoTxidKey(
  args: InferRequestType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>,
) {
  return ['ntp1', '/ntp1/transactioninfo/:txid', args] as const
}

export function useGetNtp1TransactioninfoTxid<TError = unknown>(
  args: InferRequestType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>>
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
        ? getGetNtp1TransactioninfoTxidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ntp1.transactioninfo[':txid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNtp1TransactioninfoTxid<TError = unknown>(
  args: InferRequestType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>>
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
        ? getGetNtp1TransactioninfoTxidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ntp1.transactioninfo)[':txid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ntp1.transactioninfo[':txid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTestnetFaucetKey(args: InferRequestType<typeof client.testnet.faucet.$get>) {
  return ['testnet', '/testnet/faucet', args] as const
}

export function useGetTestnetFaucet<TError = unknown>(
  args: InferRequestType<typeof client.testnet.faucet.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.faucet.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTestnetFaucetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.faucet.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.testnet.faucet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestnetFaucet<TError = unknown>(
  args: InferRequestType<typeof client.testnet.faucet.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.faucet.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTestnetFaucetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.faucet.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.testnet.faucet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTestnetInsAddrAddressKey(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['$get']>,
) {
  return ['testnet', '/testnet/ins/addr/:address', args] as const
}

export function useGetTestnetInsAddrAddress<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['$get']>>
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
        ? getGetTestnetInsAddrAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.testnet.ins.addr[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestnetInsAddrAddress<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['$get']>>
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
        ? getGetTestnetInsAddrAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.testnet.ins.addr[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTestnetInsAddrAddressBalanceKey(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>,
) {
  return ['testnet', '/testnet/ins/addr/:address/balance', args] as const
}

export function useGetTestnetInsAddrAddressBalance<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>>
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
        ? getGetTestnetInsAddrAddressBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.testnet.ins.addr[':address'].balance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestnetInsAddrAddressBalance<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>>
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
        ? getGetTestnetInsAddrAddressBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['balance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.testnet.ins.addr[':address'].balance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTestnetInsAddrAddressTotalReceivedKey(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>,
) {
  return ['testnet', '/testnet/ins/addr/:address/totalReceived', args] as const
}

export function useGetTestnetInsAddrAddressTotalReceived<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>
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
        ? getGetTestnetInsAddrAddressTotalReceivedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.testnet.ins.addr[':address'].totalReceived.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestnetInsAddrAddressTotalReceived<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>
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
        ? getGetTestnetInsAddrAddressTotalReceivedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.testnet.ins.addr)[':address']['totalReceived']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.testnet.ins.addr[':address'].totalReceived.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTestnetInsAddrAddressTotalSentKey(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>,
) {
  return ['testnet', '/testnet/ins/addr/:address/totalSent', args] as const
}

export function useGetTestnetInsAddrAddressTotalSent<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>>
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
        ? getGetTestnetInsAddrAddressTotalSentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.testnet.ins.addr[':address'].totalSent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestnetInsAddrAddressTotalSent<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>>
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
        ? getGetTestnetInsAddrAddressTotalSentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['totalSent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.testnet.ins.addr[':address'].totalSent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTestnetInsAddrAddressUnconfirmedBalanceKey(
  args: InferRequestType<
    (typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']
  >,
) {
  return ['testnet', '/testnet/ins/addr/:address/unconfirmedBalance', args] as const
}

export function useGetTestnetInsAddrAddressUnconfirmedBalance<TError = unknown>(
  args: InferRequestType<
    (typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']>
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
        ? getGetTestnetInsAddrAddressUnconfirmedBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.testnet.ins.addr[':address'].unconfirmedBalance.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestnetInsAddrAddressUnconfirmedBalance<TError = unknown>(
  args: InferRequestType<
    (typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']>
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
        ? getGetTestnetInsAddrAddressUnconfirmedBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.testnet.ins.addr)[':address']['unconfirmedBalance']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.testnet.ins.addr[':address'].unconfirmedBalance.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTestnetInsAddrAddressUtxoKey(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>,
) {
  return ['testnet', '/testnet/ins/addr/:address/utxo', args] as const
}

export function useGetTestnetInsAddrAddressUtxo<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>>
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
        ? getGetTestnetInsAddrAddressUtxoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.testnet.ins.addr[':address'].utxo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestnetInsAddrAddressUtxo<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>>
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
        ? getGetTestnetInsAddrAddressUtxoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.addr)[':address']['utxo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.testnet.ins.addr[':address'].utxo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTestnetInsBlockIndexBlockindexKey(
  args: InferRequestType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>,
) {
  return ['testnet', '/testnet/ins/block-index/:blockindex', args] as const
}

export function useGetTestnetInsBlockIndexBlockindex<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>>
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
        ? getGetTestnetInsBlockIndexBlockindexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.testnet.ins['block-index'][':blockindex'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestnetInsBlockIndexBlockindex<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>>
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
        ? getGetTestnetInsBlockIndexBlockindexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins)['block-index'][':blockindex']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.testnet.ins['block-index'][':blockindex'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTestnetInsBlockBlockhashKey(
  args: InferRequestType<(typeof client.testnet.ins.block)[':blockhash']['$get']>,
) {
  return ['testnet', '/testnet/ins/block/:blockhash', args] as const
}

export function useGetTestnetInsBlockBlockhash<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ins.block)[':blockhash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.block)[':blockhash']['$get']>>
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
        ? getGetTestnetInsBlockBlockhashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.block)[':blockhash']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.testnet.ins.block[':blockhash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestnetInsBlockBlockhash<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ins.block)[':blockhash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.block)[':blockhash']['$get']>>
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
        ? getGetTestnetInsBlockBlockhashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.block)[':blockhash']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.testnet.ins.block[':blockhash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTestnetInsRawtxTxidKey(
  args: InferRequestType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>,
) {
  return ['testnet', '/testnet/ins/rawtx/:txid', args] as const
}

export function useGetTestnetInsRawtxTxid<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>>
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
        ? getGetTestnetInsRawtxTxidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.testnet.ins.rawtx[':txid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestnetInsRawtxTxid<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>>
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
        ? getGetTestnetInsRawtxTxidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ins.rawtx)[':txid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.testnet.ins.rawtx[':txid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTestnetInsStatusKey(
  args: InferRequestType<typeof client.testnet.ins.status.$get>,
) {
  return ['testnet', '/testnet/ins/status', args] as const
}

export function useGetTestnetInsStatus<TError = unknown>(
  args: InferRequestType<typeof client.testnet.ins.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.status.$get>>>>
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
        ? getGetTestnetInsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.testnet.ins.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestnetInsStatus<TError = unknown>(
  args: InferRequestType<typeof client.testnet.ins.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.status.$get>>>>
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
        ? getGetTestnetInsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.testnet.ins.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTestnetInsSyncKey() {
  return ['testnet', '/testnet/ins/sync'] as const
}

export function useGetTestnetInsSync<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.sync.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTestnetInsSyncKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.sync.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.testnet.ins.sync.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestnetInsSync<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.sync.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTestnetInsSyncKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.sync.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.testnet.ins.sync.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTestnetInsTxSendKey() {
  return ['testnet', '/testnet/ins/tx/send', 'POST'] as const
}

export function usePostTestnetInsTxSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.tx.send.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.testnet.ins.tx.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTestnetInsTxSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.testnet.ins.tx.send.$post> }) =>
        parseResponse(client.testnet.ins.tx.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTestnetInsTxTxidKey(
  args: InferRequestType<(typeof client.testnet.ins.tx)[':txid']['$get']>,
) {
  return ['testnet', '/testnet/ins/tx/:txid', args] as const
}

export function useGetTestnetInsTxTxid<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ins.tx)[':txid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.testnet.ins.tx)[':txid']['$get']>>>
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
        ? getGetTestnetInsTxTxidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.testnet.ins.tx)[':txid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.testnet.ins.tx[':txid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestnetInsTxTxid<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ins.tx)[':txid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.testnet.ins.tx)[':txid']['$get']>>>
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
        ? getGetTestnetInsTxTxidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.testnet.ins.tx)[':txid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.testnet.ins.tx[':txid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTestnetInsTxsKey(args: InferRequestType<typeof client.testnet.ins.txs.$get>) {
  return ['testnet', '/testnet/ins/txs', args] as const
}

export function useGetTestnetInsTxs<TError = unknown>(
  args: InferRequestType<typeof client.testnet.ins.txs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.txs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTestnetInsTxsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.txs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.testnet.ins.txs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestnetInsTxs<TError = unknown>(
  args: InferRequestType<typeof client.testnet.ins.txs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.txs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTestnetInsTxsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ins.txs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.testnet.ins.txs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTestnetNtp1AddressinfoAddressKey(
  args: InferRequestType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>,
) {
  return ['testnet', '/testnet/ntp1/addressinfo/:address', args] as const
}

export function useGetTestnetNtp1AddressinfoAddress<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>>
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
        ? getGetTestnetNtp1AddressinfoAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.testnet.ntp1.addressinfo[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestnetNtp1AddressinfoAddress<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>>
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
        ? getGetTestnetNtp1AddressinfoAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ntp1.addressinfo)[':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.testnet.ntp1.addressinfo[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTestnetNtp1BroadcastKey() {
  return ['testnet', '/testnet/ntp1/broadcast', 'POST'] as const
}

export function usePostTestnetNtp1Broadcast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ntp1.broadcast.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.testnet.ntp1.broadcast.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTestnetNtp1BroadcastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.testnet.ntp1.broadcast.$post> },
      ) => parseResponse(client.testnet.ntp1.broadcast.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTestnetNtp1BurntokenKey() {
  return ['testnet', '/testnet/ntp1/burntoken', 'POST'] as const
}

export function usePostTestnetNtp1Burntoken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ntp1.burntoken.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.testnet.ntp1.burntoken.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTestnetNtp1BurntokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.testnet.ntp1.burntoken.$post> },
      ) => parseResponse(client.testnet.ntp1.burntoken.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTestnetNtp1IssueKey() {
  return ['testnet', '/testnet/ntp1/issue', 'POST'] as const
}

export function usePostTestnetNtp1Issue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ntp1.issue.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.testnet.ntp1.issue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTestnetNtp1IssueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.testnet.ntp1.issue.$post> }) =>
        parseResponse(client.testnet.ntp1.issue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTestnetNtp1SendtokenKey() {
  return ['testnet', '/testnet/ntp1/sendtoken', 'POST'] as const
}

export function usePostTestnetNtp1Sendtoken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.testnet.ntp1.sendtoken.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.testnet.ntp1.sendtoken.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTestnetNtp1SendtokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.testnet.ntp1.sendtoken.$post> },
      ) => parseResponse(client.testnet.ntp1.sendtoken.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTestnetNtp1StakeholdersTokenidKey(
  args: InferRequestType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>,
) {
  return ['testnet', '/testnet/ntp1/stakeholders/:tokenid', args] as const
}

export function useGetTestnetNtp1StakeholdersTokenid<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>>
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
        ? getGetTestnetNtp1StakeholdersTokenidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.testnet.ntp1.stakeholders[':tokenid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestnetNtp1StakeholdersTokenid<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>>
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
        ? getGetTestnetNtp1StakeholdersTokenidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ntp1.stakeholders)[':tokenid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.testnet.ntp1.stakeholders[':tokenid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTestnetNtp1TokenidTokensymbolKey(
  args: InferRequestType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>,
) {
  return ['testnet', '/testnet/ntp1/tokenid/:tokensymbol', args] as const
}

export function useGetTestnetNtp1TokenidTokensymbol<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>>
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
        ? getGetTestnetNtp1TokenidTokensymbolKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.testnet.ntp1.tokenid[':tokensymbol'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestnetNtp1TokenidTokensymbol<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>>
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
        ? getGetTestnetNtp1TokenidTokensymbolKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ntp1.tokenid)[':tokensymbol']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.testnet.ntp1.tokenid[':tokensymbol'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTestnetNtp1TokenmetadataTokenidKey(
  args: InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>,
) {
  return ['testnet', '/testnet/ntp1/tokenmetadata/:tokenid', args] as const
}

export function useGetTestnetNtp1TokenmetadataTokenid<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>>
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
        ? getGetTestnetNtp1TokenmetadataTokenidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.testnet.ntp1.tokenmetadata[':tokenid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestnetNtp1TokenmetadataTokenid<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>>
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
        ? getGetTestnetNtp1TokenmetadataTokenidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.testnet.ntp1.tokenmetadata[':tokenid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTestnetNtp1TokenmetadataTokenidUtxoKey(
  args: InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>,
) {
  return ['testnet', '/testnet/ntp1/tokenmetadata/:tokenid/:utxo', args] as const
}

export function useGetTestnetNtp1TokenmetadataTokenidUtxo<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>
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
        ? getGetTestnetNtp1TokenmetadataTokenidUtxoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.testnet.ntp1.tokenmetadata[':tokenid'][':utxo'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestnetNtp1TokenmetadataTokenidUtxo<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>
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
        ? getGetTestnetNtp1TokenmetadataTokenidUtxoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.testnet.ntp1.tokenmetadata)[':tokenid'][':utxo']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.testnet.ntp1.tokenmetadata[':tokenid'][':utxo'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTestnetNtp1TransactioninfoTxidKey(
  args: InferRequestType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>,
) {
  return ['testnet', '/testnet/ntp1/transactioninfo/:txid', args] as const
}

export function useGetTestnetNtp1TransactioninfoTxid<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>>
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
        ? getGetTestnetNtp1TransactioninfoTxidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.testnet.ntp1.transactioninfo[':txid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestnetNtp1TransactioninfoTxid<TError = unknown>(
  args: InferRequestType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>>
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
        ? getGetTestnetNtp1TransactioninfoTxidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.testnet.ntp1.transactioninfo)[':txid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.testnet.ntp1.transactioninfo[':txid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
