import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getClearAddressKey() {
  return ['clearAddress'] as const
}

export function getDeleteAddressKey() {
  return ['deleteAddress'] as const
}

export function getExportAddressKey() {
  return ['exportAddress'] as const
}

export function getGetBlockKey() {
  return ['getBlock'] as const
}

export function getGetEthereumBalanceKey() {
  return ['getEthereumBalance'] as const
}

export function getGetExchangeRateKey() {
  return ['getExchangeRate'] as const
}

export function getGetGasPriceKey() {
  return ['getGasPrice'] as const
}

export function getGetLastBlockNumberKey() {
  return ['getLastBlockNumber'] as const
}

export function getGetTokenKey() {
  return ['getToken'] as const
}

export function getGetTokenBalanceKey() {
  return ['getTokenBalance'] as const
}

export function getGetTransactionsKey() {
  return ['getTransactions'] as const
}

export function getImportAddressKey() {
  return ['importAddress'] as const
}

export function getListAddressesKey() {
  return ['listAddresses'] as const
}

export function getListFailedIPNsKey() {
  return ['listFailedIPNs'] as const
}

export function getListSubscribedAddressesKey() {
  return ['listSubscribedAddresses'] as const
}

export function getNewAddressKey() {
  return ['newAddress'] as const
}

export function getResendFailedIPNKey() {
  return ['resendFailedIPN'] as const
}

export function getSendEthereumKey() {
  return ['sendEthereum'] as const
}

export function getSendTokenKey() {
  return ['sendToken'] as const
}

export function getSubscribeAddressKey() {
  return ['subscribeAddress'] as const
}

export function getUnsubscribeAddressKey() {
  return ['unsubscribeAddress'] as const
}

export function getPostClearAddressKey() {
  return ['clearAddress', '/clearAddress', 'POST'] as const
}

export function usePostClearAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clearAddress.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.clearAddress.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClearAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.clearAddress.$post> }) =>
        parseResponse(client.clearAddress.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteAddressKey() {
  return ['deleteAddress', '/deleteAddress', 'POST'] as const
}

export function usePostDeleteAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteAddress.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteAddress.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deleteAddress.$post> }) =>
        parseResponse(client.deleteAddress.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportAddressKey() {
  return ['exportAddress', '/exportAddress', 'POST'] as const
}

export function usePostExportAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exportAddress.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.exportAddress.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exportAddress.$post> }) =>
        parseResponse(client.exportAddress.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetBlockKey() {
  return ['getBlock', '/getBlock', 'POST'] as const
}

export function usePostGetBlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getBlock.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.getBlock.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetBlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getBlock.$post> }) =>
        parseResponse(client.getBlock.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetEthereumBalanceKey() {
  return ['getEthereumBalance', '/getEthereumBalance', 'POST'] as const
}

export function usePostGetEthereumBalance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getEthereumBalance.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getEthereumBalance.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetEthereumBalanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getEthereumBalance.$post> }) =>
        parseResponse(client.getEthereumBalance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetExchangeRateKey() {
  return ['getExchangeRate', '/getExchangeRate', 'POST'] as const
}

export function usePostGetExchangeRate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getExchangeRate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getExchangeRate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetExchangeRateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getExchangeRate.$post> }) =>
        parseResponse(client.getExchangeRate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetGasPriceKey() {
  return ['getGasPrice', '/getGasPrice', 'POST'] as const
}

export function usePostGetGasPrice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getGasPrice.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.getGasPrice.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetGasPriceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getGasPrice.$post> }) =>
        parseResponse(client.getGasPrice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetLastBlockNumberKey() {
  return ['getLastBlockNumber', '/getLastBlockNumber', 'POST'] as const
}

export function usePostGetLastBlockNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getLastBlockNumber.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getLastBlockNumber.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetLastBlockNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getLastBlockNumber.$post> }) =>
        parseResponse(client.getLastBlockNumber.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetTokenKey() {
  return ['getToken', '/getToken', 'POST'] as const
}

export function usePostGetToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.getToken.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getToken.$post> }) =>
        parseResponse(client.getToken.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetTokenBalanceKey() {
  return ['getTokenBalance', '/getTokenBalance', 'POST'] as const
}

export function usePostGetTokenBalance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getTokenBalance.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getTokenBalance.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetTokenBalanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getTokenBalance.$post> }) =>
        parseResponse(client.getTokenBalance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetTransactionsKey() {
  return ['getTransactions', '/getTransactions', 'POST'] as const
}

export function usePostGetTransactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getTransactions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getTransactions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetTransactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getTransactions.$post> }) =>
        parseResponse(client.getTransactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostImportAddressKey() {
  return ['importAddress', '/importAddress', 'POST'] as const
}

export function usePostImportAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.importAddress.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.importAddress.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImportAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.importAddress.$post> }) =>
        parseResponse(client.importAddress.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListAddressesKey() {
  return ['listAddresses', '/listAddresses', 'POST'] as const
}

export function usePostListAddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAddresses.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listAddresses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListAddressesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listAddresses.$post> }) =>
        parseResponse(client.listAddresses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListFailedIPNsKey() {
  return ['listFailedIPNs', '/listFailedIPNs', 'POST'] as const
}

export function usePostListFailedIPNs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listFailedIPNs.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listFailedIPNs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListFailedIPNsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listFailedIPNs.$post> }) =>
        parseResponse(client.listFailedIPNs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListSubscribedAddressesKey() {
  return ['listSubscribedAddresses', '/listSubscribedAddresses', 'POST'] as const
}

export function usePostListSubscribedAddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listSubscribedAddresses.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.listSubscribedAddresses.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListSubscribedAddressesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.listSubscribedAddresses.$post> },
      ) => parseResponse(client.listSubscribedAddresses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNewAddressKey() {
  return ['newAddress', '/newAddress', 'POST'] as const
}

export function usePostNewAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newAddress.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.newAddress.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNewAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.newAddress.$post> }) =>
        parseResponse(client.newAddress.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostResendFailedIPNKey() {
  return ['resendFailedIPN', '/resendFailedIPN', 'POST'] as const
}

export function usePostResendFailedIPN<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resendFailedIPN.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.resendFailedIPN.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResendFailedIPNKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.resendFailedIPN.$post> }) =>
        parseResponse(client.resendFailedIPN.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendEthereumKey() {
  return ['sendEthereum', '/sendEthereum', 'POST'] as const
}

export function usePostSendEthereum<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendEthereum.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sendEthereum.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendEthereumKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendEthereum.$post> }) =>
        parseResponse(client.sendEthereum.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendTokenKey() {
  return ['sendToken', '/sendToken', 'POST'] as const
}

export function usePostSendToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendToken.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sendToken.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendToken.$post> }) =>
        parseResponse(client.sendToken.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubscribeAddressKey() {
  return ['subscribeAddress', '/subscribeAddress', 'POST'] as const
}

export function usePostSubscribeAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribeAddress.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.subscribeAddress.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscribeAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.subscribeAddress.$post> }) =>
        parseResponse(client.subscribeAddress.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUnsubscribeAddressKey() {
  return ['unsubscribeAddress', '/unsubscribeAddress', 'POST'] as const
}

export function usePostUnsubscribeAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unsubscribeAddress.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.unsubscribeAddress.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnsubscribeAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.unsubscribeAddress.$post> }) =>
        parseResponse(client.unsubscribeAddress.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
