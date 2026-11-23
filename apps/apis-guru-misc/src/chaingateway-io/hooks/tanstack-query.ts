import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
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

export function getPostClearAddressMutationKey() {
  return ['clearAddress', '/clearAddress', 'POST'] as const
}

export function getPostClearAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clearAddress.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.clearAddress.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClearAddressMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.clearAddress.$post>) {
      return parseResponse(client.clearAddress.$post(args, options))
    },
  })
}

export function usePostClearAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clearAddress.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.clearAddress.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClearAddressMutationOptions<TError, TOnMutateResult>(
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

export function getPostDeleteAddressMutationKey() {
  return ['deleteAddress', '/deleteAddress', 'POST'] as const
}

export function getPostDeleteAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteAddress.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.deleteAddress.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteAddressMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteAddress.$post>) {
      return parseResponse(client.deleteAddress.$post(args, options))
    },
  })
}

export function usePostDeleteAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteAddress.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.deleteAddress.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteAddressMutationOptions<TError, TOnMutateResult>(
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

export function getPostExportAddressMutationKey() {
  return ['exportAddress', '/exportAddress', 'POST'] as const
}

export function getPostExportAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exportAddress.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.exportAddress.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportAddressMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.exportAddress.$post>) {
      return parseResponse(client.exportAddress.$post(args, options))
    },
  })
}

export function usePostExportAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exportAddress.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.exportAddress.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExportAddressMutationOptions<TError, TOnMutateResult>(
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

export function getPostGetBlockMutationKey() {
  return ['getBlock', '/getBlock', 'POST'] as const
}

export function getPostGetBlockMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getBlock.$post>>>>>,
    TError,
    InferRequestType<typeof client.getBlock.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetBlockMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getBlock.$post>) {
      return parseResponse(client.getBlock.$post(args, options))
    },
  })
}

export function usePostGetBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getBlock.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.getBlock.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetBlockMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetEthereumBalanceMutationKey() {
  return ['getEthereumBalance', '/getEthereumBalance', 'POST'] as const
}

export function getPostGetEthereumBalanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getEthereumBalance.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getEthereumBalance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetEthereumBalanceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getEthereumBalance.$post>) {
      return parseResponse(client.getEthereumBalance.$post(args, options))
    },
  })
}

export function usePostGetEthereumBalance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getEthereumBalance.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.getEthereumBalance.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetEthereumBalanceMutationOptions<TError, TOnMutateResult>(
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

export function getPostGetExchangeRateMutationKey() {
  return ['getExchangeRate', '/getExchangeRate', 'POST'] as const
}

export function getPostGetExchangeRateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getExchangeRate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getExchangeRate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetExchangeRateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getExchangeRate.$post>) {
      return parseResponse(client.getExchangeRate.$post(args, options))
    },
  })
}

export function usePostGetExchangeRate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getExchangeRate.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.getExchangeRate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetExchangeRateMutationOptions<TError, TOnMutateResult>(
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

export function getPostGetGasPriceMutationKey() {
  return ['getGasPrice', '/getGasPrice', 'POST'] as const
}

export function getPostGetGasPriceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getGasPrice.$post>>>>>,
    TError,
    InferRequestType<typeof client.getGasPrice.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetGasPriceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getGasPrice.$post>) {
      return parseResponse(client.getGasPrice.$post(args, options))
    },
  })
}

export function usePostGetGasPrice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getGasPrice.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.getGasPrice.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetGasPriceMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetLastBlockNumberMutationKey() {
  return ['getLastBlockNumber', '/getLastBlockNumber', 'POST'] as const
}

export function getPostGetLastBlockNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getLastBlockNumber.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getLastBlockNumber.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetLastBlockNumberMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getLastBlockNumber.$post>) {
      return parseResponse(client.getLastBlockNumber.$post(args, options))
    },
  })
}

export function usePostGetLastBlockNumber<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getLastBlockNumber.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.getLastBlockNumber.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetLastBlockNumberMutationOptions<TError, TOnMutateResult>(
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

export function getPostGetTokenMutationKey() {
  return ['getToken', '/getToken', 'POST'] as const
}

export function getPostGetTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$post>>>>>,
    TError,
    InferRequestType<typeof client.getToken.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getToken.$post>) {
      return parseResponse(client.getToken.$post(args, options))
    },
  })
}

export function usePostGetToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.getToken.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetTokenBalanceMutationKey() {
  return ['getTokenBalance', '/getTokenBalance', 'POST'] as const
}

export function getPostGetTokenBalanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getTokenBalance.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getTokenBalance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetTokenBalanceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getTokenBalance.$post>) {
      return parseResponse(client.getTokenBalance.$post(args, options))
    },
  })
}

export function usePostGetTokenBalance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getTokenBalance.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.getTokenBalance.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetTokenBalanceMutationOptions<TError, TOnMutateResult>(
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

export function getPostGetTransactionsMutationKey() {
  return ['getTransactions', '/getTransactions', 'POST'] as const
}

export function getPostGetTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getTransactions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getTransactions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetTransactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getTransactions.$post>) {
      return parseResponse(client.getTransactions.$post(args, options))
    },
  })
}

export function usePostGetTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getTransactions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.getTransactions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetTransactionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostImportAddressMutationKey() {
  return ['importAddress', '/importAddress', 'POST'] as const
}

export function getPostImportAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.importAddress.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.importAddress.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImportAddressMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.importAddress.$post>) {
      return parseResponse(client.importAddress.$post(args, options))
    },
  })
}

export function usePostImportAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.importAddress.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.importAddress.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImportAddressMutationOptions<TError, TOnMutateResult>(
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

export function getPostListAddressesMutationKey() {
  return ['listAddresses', '/listAddresses', 'POST'] as const
}

export function getPostListAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAddresses.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listAddresses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListAddressesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listAddresses.$post>) {
      return parseResponse(client.listAddresses.$post(args, options))
    },
  })
}

export function usePostListAddresses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listAddresses.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.listAddresses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListAddressesMutationOptions<TError, TOnMutateResult>(
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

export function getPostListFailedIPNsMutationKey() {
  return ['listFailedIPNs', '/listFailedIPNs', 'POST'] as const
}

export function getPostListFailedIPNsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listFailedIPNs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listFailedIPNs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListFailedIPNsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listFailedIPNs.$post>) {
      return parseResponse(client.listFailedIPNs.$post(args, options))
    },
  })
}

export function usePostListFailedIPNs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listFailedIPNs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.listFailedIPNs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListFailedIPNsMutationOptions<TError, TOnMutateResult>(
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

export function getPostListSubscribedAddressesMutationKey() {
  return ['listSubscribedAddresses', '/listSubscribedAddresses', 'POST'] as const
}

export function getPostListSubscribedAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listSubscribedAddresses.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.listSubscribedAddresses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListSubscribedAddressesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listSubscribedAddresses.$post>) {
      return parseResponse(client.listSubscribedAddresses.$post(args, options))
    },
  })
}

export function usePostListSubscribedAddresses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listSubscribedAddresses.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.listSubscribedAddresses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListSubscribedAddressesMutationOptions<TError, TOnMutateResult>(
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

export function getPostNewAddressMutationKey() {
  return ['newAddress', '/newAddress', 'POST'] as const
}

export function getPostNewAddressMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newAddress.$post>>>>>,
    TError,
    InferRequestType<typeof client.newAddress.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNewAddressMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.newAddress.$post>) {
      return parseResponse(client.newAddress.$post(args, options))
    },
  })
}

export function usePostNewAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newAddress.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.newAddress.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNewAddressMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostResendFailedIPNMutationKey() {
  return ['resendFailedIPN', '/resendFailedIPN', 'POST'] as const
}

export function getPostResendFailedIPNMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resendFailedIPN.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.resendFailedIPN.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResendFailedIPNMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.resendFailedIPN.$post>) {
      return parseResponse(client.resendFailedIPN.$post(args, options))
    },
  })
}

export function usePostResendFailedIPN<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resendFailedIPN.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.resendFailedIPN.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostResendFailedIPNMutationOptions<TError, TOnMutateResult>(
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

export function getPostSendEthereumMutationKey() {
  return ['sendEthereum', '/sendEthereum', 'POST'] as const
}

export function getPostSendEthereumMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendEthereum.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sendEthereum.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendEthereumMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendEthereum.$post>) {
      return parseResponse(client.sendEthereum.$post(args, options))
    },
  })
}

export function usePostSendEthereum<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendEthereum.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sendEthereum.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendEthereumMutationOptions<TError, TOnMutateResult>(
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

export function getPostSendTokenMutationKey() {
  return ['sendToken', '/sendToken', 'POST'] as const
}

export function getPostSendTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendToken.$post>>>>>,
    TError,
    InferRequestType<typeof client.sendToken.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sendToken.$post>) {
      return parseResponse(client.sendToken.$post(args, options))
    },
  })
}

export function usePostSendToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendToken.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sendToken.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSubscribeAddressMutationKey() {
  return ['subscribeAddress', '/subscribeAddress', 'POST'] as const
}

export function getPostSubscribeAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribeAddress.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.subscribeAddress.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscribeAddressMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscribeAddress.$post>) {
      return parseResponse(client.subscribeAddress.$post(args, options))
    },
  })
}

export function usePostSubscribeAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subscribeAddress.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.subscribeAddress.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSubscribeAddressMutationOptions<TError, TOnMutateResult>(
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

export function getPostUnsubscribeAddressMutationKey() {
  return ['unsubscribeAddress', '/unsubscribeAddress', 'POST'] as const
}

export function getPostUnsubscribeAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unsubscribeAddress.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.unsubscribeAddress.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUnsubscribeAddressMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.unsubscribeAddress.$post>) {
      return parseResponse(client.unsubscribeAddress.$post(args, options))
    },
  })
}

export function usePostUnsubscribeAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.unsubscribeAddress.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.unsubscribeAddress.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUnsubscribeAddressMutationOptions<TError, TOnMutateResult>(
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
