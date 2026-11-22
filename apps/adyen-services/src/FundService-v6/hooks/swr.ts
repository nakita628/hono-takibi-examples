import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountHolderBalanceKey() {
  return ['accountHolderBalance'] as const
}

export function getAccountHolderTransactionListKey() {
  return ['accountHolderTransactionList'] as const
}

export function getDebitAccountHolderKey() {
  return ['debitAccountHolder'] as const
}

export function getPayoutAccountHolderKey() {
  return ['payoutAccountHolder'] as const
}

export function getRefundFundsTransferKey() {
  return ['refundFundsTransfer'] as const
}

export function getRefundNotPaidOutTransfersKey() {
  return ['refundNotPaidOutTransfers'] as const
}

export function getSetupBeneficiaryKey() {
  return ['setupBeneficiary'] as const
}

export function getTransferFundsKey() {
  return ['transferFunds'] as const
}

export function getPostAccountHolderBalanceKey() {
  return ['accountHolderBalance', '/accountHolderBalance', 'POST'] as const
}

export function usePostAccountHolderBalance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accountHolderBalance.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.accountHolderBalance.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountHolderBalanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.accountHolderBalance.$post> },
      ) => parseResponse(client.accountHolderBalance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountHolderTransactionListKey() {
  return ['accountHolderTransactionList', '/accountHolderTransactionList', 'POST'] as const
}

export function usePostAccountHolderTransactionList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accountHolderTransactionList.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.accountHolderTransactionList.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountHolderTransactionListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.accountHolderTransactionList.$post> },
      ) => parseResponse(client.accountHolderTransactionList.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDebitAccountHolderKey() {
  return ['debitAccountHolder', '/debitAccountHolder', 'POST'] as const
}

export function usePostDebitAccountHolder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debitAccountHolder.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.debitAccountHolder.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDebitAccountHolderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.debitAccountHolder.$post> }) =>
        parseResponse(client.debitAccountHolder.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPayoutAccountHolderKey() {
  return ['payoutAccountHolder', '/payoutAccountHolder', 'POST'] as const
}

export function usePostPayoutAccountHolder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payoutAccountHolder.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.payoutAccountHolder.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayoutAccountHolderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payoutAccountHolder.$post> }) =>
        parseResponse(client.payoutAccountHolder.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRefundFundsTransferKey() {
  return ['refundFundsTransfer', '/refundFundsTransfer', 'POST'] as const
}

export function usePostRefundFundsTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refundFundsTransfer.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.refundFundsTransfer.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRefundFundsTransferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.refundFundsTransfer.$post> }) =>
        parseResponse(client.refundFundsTransfer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRefundNotPaidOutTransfersKey() {
  return ['refundNotPaidOutTransfers', '/refundNotPaidOutTransfers', 'POST'] as const
}

export function usePostRefundNotPaidOutTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.refundNotPaidOutTransfers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.refundNotPaidOutTransfers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRefundNotPaidOutTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.refundNotPaidOutTransfers.$post> },
      ) => parseResponse(client.refundNotPaidOutTransfers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetupBeneficiaryKey() {
  return ['setupBeneficiary', '/setupBeneficiary', 'POST'] as const
}

export function usePostSetupBeneficiary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setupBeneficiary.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.setupBeneficiary.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetupBeneficiaryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setupBeneficiary.$post> }) =>
        parseResponse(client.setupBeneficiary.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferFundsKey() {
  return ['transferFunds', '/transferFunds', 'POST'] as const
}

export function usePostTransferFunds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transferFunds.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transferFunds.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferFundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transferFunds.$post> }) =>
        parseResponse(client.transferFunds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
