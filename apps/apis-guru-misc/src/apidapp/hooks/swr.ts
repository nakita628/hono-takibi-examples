import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountKey() {
  return ['account'] as const
}

export function getBlockKey() {
  return ['block'] as const
}

export function getBlockchainKey() {
  return ['blockchain'] as const
}

export function getContractKey() {
  return ['contract'] as const
}

export function getEchoKey() {
  return ['echo'] as const
}

export function getErc20Key() {
  return ['erc20'] as const
}

export function getKeyKey() {
  return ['key'] as const
}

export function getTransactionKey() {
  return ['transaction'] as const
}

export function getVersionKey() {
  return ['version'] as const
}

export function getWalletKey() {
  return ['wallet'] as const
}

export function getOptionsKey() {
  return ['', '/', 'OPTIONS'] as const
}

export function useOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$options>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.index.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountKey() {
  return ['account', '/account', 'POST'] as const
}

export function usePostAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.account.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAccountKey() {
  return ['account', '/account', 'OPTIONS'] as const
}

export function useOptionsAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$options>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.account.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountIdKey(args: InferRequestType<(typeof client.account)[':id']['$get']>) {
  return ['account', '/account/:id', args] as const
}

export function useGetAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.account)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAccountIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.account)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAccountIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsAccountIdKey() {
  return ['account', '/account/:id', 'OPTIONS'] as const
}

export function useOptionsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)[':id']['$options']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)[':id']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account)[':id']['$options']> },
      ) => parseResponse(client.account[':id'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBlockKey() {
  return ['block', '/block'] as const
}

export function useGetBlock<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.block.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetBlockKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.block.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.block.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlock<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.block.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetBlockKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.block.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.block.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsBlockKey() {
  return ['block', '/block', 'OPTIONS'] as const
}

export function useOptionsBlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.block.$options>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsBlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.block.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBlockIdKey(args: InferRequestType<(typeof client.block)[':id']['$get']>) {
  return ['block', '/block/:id', args] as const
}

export function useGetBlockId<TError = unknown>(
  args: InferRequestType<(typeof client.block)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.block)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBlockIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.block)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.block[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlockId<TError = unknown>(
  args: InferRequestType<(typeof client.block)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.block)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBlockIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.block)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.block[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsBlockIdKey() {
  return ['block', '/block/:id', 'OPTIONS'] as const
}

export function useOptionsBlockId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.block)[':id']['$options']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.block)[':id']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsBlockIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.block)[':id']['$options']> },
      ) => parseResponse(client.block[':id'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBlockIdTransactionKey(
  args: InferRequestType<(typeof client.block)[':id']['transaction']['$get']>,
) {
  return ['block', '/block/:id/transaction', args] as const
}

export function useGetBlockIdTransaction<TError = unknown>(
  args: InferRequestType<(typeof client.block)[':id']['transaction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.block)[':id']['transaction']['$get']>>
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
        ? getGetBlockIdTransactionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.block)[':id']['transaction']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.block[':id'].transaction.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlockIdTransaction<TError = unknown>(
  args: InferRequestType<(typeof client.block)[':id']['transaction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.block)[':id']['transaction']['$get']>>
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
        ? getGetBlockIdTransactionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.block)[':id']['transaction']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.block[':id'].transaction.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsBlockIdTransactionKey() {
  return ['block', '/block/:id/transaction', 'OPTIONS'] as const
}

export function useOptionsBlockIdTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.block)[':id']['transaction']['$options']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.block)[':id']['transaction']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsBlockIdTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.block)[':id']['transaction']['$options']> },
      ) => parseResponse(client.block[':id'].transaction.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBlockIdTransactionIndexKey(
  args: InferRequestType<(typeof client.block)[':id']['transaction'][':index']['$get']>,
) {
  return ['block', '/block/:id/transaction/:index', args] as const
}

export function useGetBlockIdTransactionIndex<TError = unknown>(
  args: InferRequestType<(typeof client.block)[':id']['transaction'][':index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.block)[':id']['transaction'][':index']['$get']>>
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
        ? getGetBlockIdTransactionIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.block)[':id']['transaction'][':index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.block[':id'].transaction[':index'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlockIdTransactionIndex<TError = unknown>(
  args: InferRequestType<(typeof client.block)[':id']['transaction'][':index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.block)[':id']['transaction'][':index']['$get']>>
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
        ? getGetBlockIdTransactionIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.block)[':id']['transaction'][':index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.block[':id'].transaction[':index'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsBlockIdTransactionIndexKey() {
  return ['block', '/block/:id/transaction/:index', 'OPTIONS'] as const
}

export function useOptionsBlockIdTransactionIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.block)[':id']['transaction'][':index']['$options']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.block)[':id']['transaction'][':index']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsBlockIdTransactionIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.block)[':id']['transaction'][':index']['$options']>
        },
      ) => parseResponse(client.block[':id'].transaction[':index'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBlockchainKey() {
  return ['blockchain', '/blockchain'] as const
}

export function useGetBlockchain<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blockchain.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBlockchainKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blockchain.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blockchain.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlockchain<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blockchain.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBlockchainKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blockchain.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blockchain.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsBlockchainKey() {
  return ['blockchain', '/blockchain', 'OPTIONS'] as const
}

export function useOptionsBlockchain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blockchain.$options>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsBlockchainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.blockchain.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBlockchainIdKey(
  args: InferRequestType<(typeof client.blockchain)[':id']['$get']>,
) {
  return ['blockchain', '/blockchain/:id', args] as const
}

export function useGetBlockchainId<TError = unknown>(
  args: InferRequestType<(typeof client.blockchain)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.blockchain)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBlockchainIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.blockchain)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blockchain[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlockchainId<TError = unknown>(
  args: InferRequestType<(typeof client.blockchain)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.blockchain)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBlockchainIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.blockchain)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blockchain[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsBlockchainIdKey() {
  return ['blockchain', '/blockchain/:id', 'OPTIONS'] as const
}

export function useOptionsBlockchainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.blockchain)[':id']['$options']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.blockchain)[':id']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsBlockchainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.blockchain)[':id']['$options']> },
      ) => parseResponse(client.blockchain[':id'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContractKey() {
  return ['contract', '/contract', 'POST'] as const
}

export function usePostContract<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contract.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContractKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.contract.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsContractKey() {
  return ['contract', '/contract', 'OPTIONS'] as const
}

export function useOptionsContract<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contract.$options>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsContractKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.contract.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContractIdKey(
  args: InferRequestType<(typeof client.contract)[':id']['$get']>,
) {
  return ['contract', '/contract/:id', args] as const
}

export function useGetContractId<TError = unknown>(
  args: InferRequestType<(typeof client.contract)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contract)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetContractIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contract)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contract[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContractId<TError = unknown>(
  args: InferRequestType<(typeof client.contract)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contract)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetContractIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contract)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contract[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostContractIdKey() {
  return ['contract', '/contract/:id', 'POST'] as const
}

export function usePostContractId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contract)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contract)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContractIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contract)[':id']['$post']> },
      ) => parseResponse(client.contract[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsContractIdKey() {
  return ['contract', '/contract/:id', 'OPTIONS'] as const
}

export function useOptionsContractId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contract)[':id']['$options']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contract)[':id']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsContractIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contract)[':id']['$options']> },
      ) => parseResponse(client.contract[':id'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsEchoKey() {
  return ['echo', '/echo', 'OPTIONS'] as const
}

export function useOptionsEcho<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.echo.$options>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsEchoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.echo.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetErc20Key() {
  return ['erc20', '/erc20'] as const
}

export function useGetErc20<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.erc20.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetErc20Key() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.erc20.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.erc20.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetErc20<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.erc20.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetErc20Key() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.erc20.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.erc20.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostErc20Key() {
  return ['erc20', '/erc20', 'POST'] as const
}

export function usePostErc20<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.erc20.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostErc20Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.erc20.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsErc20Key() {
  return ['erc20', '/erc20', 'OPTIONS'] as const
}

export function useOptionsErc20<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.erc20.$options>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsErc20Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.erc20.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetErc20AddressKey(
  args: InferRequestType<(typeof client.erc20)[':address']['$get']>,
) {
  return ['erc20', '/erc20/:address', args] as const
}

export function useGetErc20Address<TError = unknown>(
  args: InferRequestType<(typeof client.erc20)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.erc20)[':address']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetErc20AddressKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.erc20)[':address']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.erc20[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetErc20Address<TError = unknown>(
  args: InferRequestType<(typeof client.erc20)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.erc20)[':address']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetErc20AddressKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.erc20)[':address']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.erc20[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostErc20AddressKey() {
  return ['erc20', '/erc20/:address', 'POST'] as const
}

export function usePostErc20Address<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.erc20)[':address']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.erc20)[':address']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostErc20AddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.erc20)[':address']['$post']> },
      ) => parseResponse(client.erc20[':address'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsErc20AddressKey() {
  return ['erc20', '/erc20/:address', 'OPTIONS'] as const
}

export function useOptionsErc20Address<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.erc20)[':address']['$options']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.erc20)[':address']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsErc20AddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.erc20)[':address']['$options']> },
      ) => parseResponse(client.erc20[':address'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKeyKey(args: InferRequestType<typeof client.key.$get>) {
  return ['key', '/key', args] as const
}

export function useGetKey<TError = unknown>(
  args: InferRequestType<typeof client.key.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.key.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetKey<TError = unknown>(
  args: InferRequestType<typeof client.key.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.key.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostKeyKey() {
  return ['key', '/key', 'POST'] as const
}

export function usePostKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.key.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsKeyKey() {
  return ['key', '/key', 'OPTIONS'] as const
}

export function useOptionsKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key.$options>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.key.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteKeyKeyKey() {
  return ['key', '/key/:key', 'DELETE'] as const
}

export function useDeleteKeyKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':key']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.key)[':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKeyKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.key)[':key']['$delete']> }) =>
        parseResponse(client.key[':key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsKeyKeyKey() {
  return ['key', '/key/:key', 'OPTIONS'] as const
}

export function useOptionsKeyKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.key)[':key']['$options']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.key)[':key']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsKeyKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.key)[':key']['$options']> }) =>
        parseResponse(client.key[':key'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransactionKey() {
  return ['transaction', '/transaction', 'POST'] as const
}

export function usePostTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.transaction.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsTransactionKey() {
  return ['transaction', '/transaction', 'OPTIONS'] as const
}

export function useOptionsTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$options>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.transaction.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransactionHashKey(
  args: InferRequestType<(typeof client.transaction)[':hash']['$get']>,
) {
  return ['transaction', '/transaction/:hash', args] as const
}

export function useGetTransactionHash<TError = unknown>(
  args: InferRequestType<(typeof client.transaction)[':hash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.transaction)[':hash']['$get']>>>
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
        ? getGetTransactionHashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.transaction)[':hash']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transaction[':hash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactionHash<TError = unknown>(
  args: InferRequestType<(typeof client.transaction)[':hash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.transaction)[':hash']['$get']>>>
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
        ? getGetTransactionHashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.transaction)[':hash']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transaction[':hash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsTransactionHashKey() {
  return ['transaction', '/transaction/:hash', 'OPTIONS'] as const
}

export function useOptionsTransactionHash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.transaction)[':hash']['$options']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transaction)[':hash']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsTransactionHashKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.transaction)[':hash']['$options']> },
      ) => parseResponse(client.transaction[':hash'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransactionHashReceiptKey(
  args: InferRequestType<(typeof client.transaction)[':hash']['receipt']['$get']>,
) {
  return ['transaction', '/transaction/:hash/receipt', args] as const
}

export function useGetTransactionHashReceipt<TError = unknown>(
  args: InferRequestType<(typeof client.transaction)[':hash']['receipt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transaction)[':hash']['receipt']['$get']>>
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
        ? getGetTransactionHashReceiptKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transaction)[':hash']['receipt']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transaction[':hash'].receipt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactionHashReceipt<TError = unknown>(
  args: InferRequestType<(typeof client.transaction)[':hash']['receipt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transaction)[':hash']['receipt']['$get']>>
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
        ? getGetTransactionHashReceiptKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transaction)[':hash']['receipt']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transaction[':hash'].receipt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsTransactionHashReceiptKey() {
  return ['transaction', '/transaction/:hash/receipt', 'OPTIONS'] as const
}

export function useOptionsTransactionHashReceipt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transaction)[':hash']['receipt']['$options']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transaction)[':hash']['receipt']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsTransactionHashReceiptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.transaction)[':hash']['receipt']['$options']> },
      ) => parseResponse(client.transaction[':hash'].receipt.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionKey() {
  return ['version', '/version'] as const
}

export function useGetVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsVersionKey() {
  return ['version', '/version', 'OPTIONS'] as const
}

export function useOptionsVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$options>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.version.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletKey() {
  return ['wallet', '/wallet'] as const
}

export function useGetWallet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWalletKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wallet.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWallet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWalletKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wallet.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWalletKey() {
  return ['wallet', '/wallet', 'POST'] as const
}

export function usePostWallet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.wallet.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsWalletKey() {
  return ['wallet', '/wallet', 'OPTIONS'] as const
}

export function useOptionsWallet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.$options>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsWalletKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.wallet.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletAccountKey() {
  return ['wallet', '/wallet/account'] as const
}

export function useGetWalletAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.account.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWalletAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.account.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wallet.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.account.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWalletAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.account.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wallet.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWalletAccountKey() {
  return ['wallet', '/wallet/account', 'POST'] as const
}

export function usePostWalletAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.account.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.wallet.account.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsWalletAccountKey() {
  return ['wallet', '/wallet/account', 'OPTIONS'] as const
}

export function useOptionsWalletAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wallet.account.$options>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsWalletAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.wallet.account.$options(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWalletAccountIdKey(
  args: InferRequestType<(typeof client.wallet.account)[':id']['$get']>,
) {
  return ['wallet', '/wallet/account/:id', args] as const
}

export function useGetWalletAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.wallet.account)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.wallet.account)[':id']['$get']>>>
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
        ? getGetWalletAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.wallet.account)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wallet.account[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWalletAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.wallet.account)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.wallet.account)[':id']['$get']>>>
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
        ? getGetWalletAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.wallet.account)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wallet.account[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsWalletAccountIdKey() {
  return ['wallet', '/wallet/account/:id', 'OPTIONS'] as const
}

export function useOptionsWalletAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.wallet.account)[':id']['$options']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wallet.account)[':id']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsWalletAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.wallet.account)[':id']['$options']> },
      ) => parseResponse(client.wallet.account[':id'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWalletAccountIdContractKey() {
  return ['wallet', '/wallet/account/:id/contract', 'POST'] as const
}

export function usePostWalletAccountIdContract<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wallet.account)[':id']['contract']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wallet.account)[':id']['contract']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletAccountIdContractKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.wallet.account)[':id']['contract']['$post']> },
      ) => parseResponse(client.wallet.account[':id'].contract.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWalletAccountIdErc20Key() {
  return ['wallet', '/wallet/account/:id/erc20', 'POST'] as const
}

export function usePostWalletAccountIdErc20<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wallet.account)[':id']['erc20']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wallet.account)[':id']['erc20']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletAccountIdErc20Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.wallet.account)[':id']['erc20']['$post']> },
      ) => parseResponse(client.wallet.account[':id'].erc20.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWalletAccountIdPayKey() {
  return ['wallet', '/wallet/account/:id/pay', 'POST'] as const
}

export function usePostWalletAccountIdPay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wallet.account)[':id']['pay']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wallet.account)[':id']['pay']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWalletAccountIdPayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.wallet.account)[':id']['pay']['$post']> },
      ) => parseResponse(client.wallet.account[':id'].pay.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsWalletAccountIdPayKey() {
  return ['wallet', '/wallet/account/:id/pay', 'OPTIONS'] as const
}

export function useOptionsWalletAccountIdPay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wallet.account)[':id']['pay']['$options']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.wallet.account)[':id']['pay']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsWalletAccountIdPayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.wallet.account)[':id']['pay']['$options']> },
      ) => parseResponse(client.wallet.account[':id'].pay.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
